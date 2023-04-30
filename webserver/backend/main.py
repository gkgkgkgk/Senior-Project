from flask import Flask, request
from flask import jsonify
import json
import os
from api_utils import example, generate_prm_from_json, defaultMap, clearenceMap, astarSpeedMap
from robot import RobotConfig
from map import Map
from flask_cors import CORS
from graphs import PRM, Node
from pathfinding import Astar
from random import *
import time
import numpy as np

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/get-map', methods=['POST'])
def getMap():
    json_data = request.get_json()

    mm = Map(cell_size=json_data["cellSize"])

    print(json_data["presetMap"])
    if json_data["presetMap"] == "testmap":
        mm = defaultMap(json_data["cellSize"])
    elif json_data["presetMap"] == "obstaclemap":
        mm = clearenceMap(json_data["cellSize"])
    elif json_data["presetMap"] == "astarspeed":
        mm = astarSpeedMap(json_data["cellSize"])
    else:
        mm.generate_random_map(json_data['mapSize'], 1/64, 8, seed = json_data['mapSeed'], amplitude=json_data['mapAmplitude'])
    
    mm.normalize_weights()

    celllist = [{'x': cell.x, 'y': cell.y, 'raw_weight': cell.raw_weight, 'normalized_weight': cell.normalized_weight} for cell in mm.cells]

    return jsonify({
        'cells': celllist
    })


@app.route('/get-prm', methods=['POST'])
def getPRM():    
    json_data = request.get_json()
    cells = [{'x': cell['x'], 'y': cell['y'], 'raw_weight': cell['raw_weight'], 'normalized_weight': cell['normalized_weight']} for cell in json_data['cells']]

    mm = Map(cells=cells, cell_size=json_data["cellSize"])

    path_map = PRM(json_data['prmSize'], json_data['graphSeed'], mm, nodes={})

    path_map.generate_points(mm, (json_data['startPos']['x'], json_data['startPos']['y']), (json_data['endPos']['x'], json_data['endPos']['y']))

    path_map.connect_nodes_knn(json_data['knnSize'])
    nodes = []
    for n in path_map.nodes:
        edges = []

        for e in path_map.nodes[n].edges:
            edges.append({'x': e.x, 'y': e.y})

        node = {'x': path_map.nodes[n].x, "y":path_map.nodes[n].y, "edges": edges}
        nodes.append(node)

    return jsonify({
        "nodes": nodes
    })


@app.route('/get-path', methods=['POST'])
def getPath():    
    json_data = request.get_json()

    config = RobotConfig(json_data['config']['maxSpeed'], json_data['config']['stepUp'], json_data['config']['stepDown'], json_data['config']['inclineUp'], json_data['config']['inclineDown'], json_data['config']['minEnergy'])
    config.user_init(json_data['config']['mass'], 0.01, 1, json_data['config']['width'])

    cells = [{'x': cell['x'], 'y': cell['y'], 'raw_weight': cell['raw_weight'], 'normalized_weight': cell['normalized_weight']} for cell in json_data['cells']]
    mm = Map(cells=cells, config=config, cell_size=json_data["cellSize"])

    nodes = {}
    for n in json_data['nodes']:
        nodes[str(n['x']) + "," + str(n['y'])] = Node(n['x'], n['y'])

    for n in json_data['nodes']:
        edges = []
        for edge in n['edges']:
            edges.append(nodes[str(edge['x'])+","+str(edge['y'])])
        
        nodes[str(n['x']) + "," + str(n['y'])].edges = edges

    path_map = PRM(len(nodes), json_data['graphSeed'], mm, nodes=nodes)
    mm.longest_edge = path_map.longest_edge
    startPos = path_map.nodes[str(json_data['startPos']['x']) + "," + str(json_data['startPos']['y'])]
    endPos = path_map.nodes[str(json_data['endPos']['x']) + "," + str(json_data['endPos']['y'])]

    astar = Astar(startPos, endPos, speed = json_data['speedPref'], energy = json_data['energyPref'], safety = json_data['safetyPref'])
    astar.find_path(mm, vanilla=json_data['distanceBased'])
    print(astar.path_costs)
    
    path = []
    for node in astar.path:
        path.append({'x': node.x, 'y': node.y})

    return jsonify({
        "path": path
    })


@app.route('/test', methods=['POST'])
def runTest():  
    json_data = request.get_json()
    trials = json_data["test"]["trialCount"]

    config = RobotConfig(json_data['config']['maxSpeed'], json_data['config']['stepUp'], json_data['config']['stepDown'], json_data['config']['inclineUp'], json_data['config']['inclineDown'], json_data['config']['minEnergy'])
    config.user_init(json_data['config']['mass'], 0.01, 1, json_data['config']['width'])

    cells = [{'x': cell['x'], 'y': cell['y'], 'raw_weight': cell['raw_weight'], 'normalized_weight': cell['normalized_weight']} for cell in json_data['cells']]
    mm = Map(cells=cells, config=config, cell_size=json_data["cellSize"])

    
    test_results = []

    for m in range(json_data['test']["mapCount"] if json_data['test']["randomizeMap"] else 1):
        path_map = {}
        map_seed = json_data["mapSeed"]
        graph_seed = json_data["graphSeed"]
        if json_data["test"]["randomizeMap"]:
            map_seed = randint(1, 10000000)
            graph_seed = randint(1, 10000000)

        for i in range(trials):
            print("------------ Running Trial:", i, "In map:", m, "---------------")
            if json_data["test"]["randomizeMap"]:
                mm.generate_random_map(json_data['mapSize'], 1/64, 8, seed = map_seed, amplitude=json_data['mapAmplitude'])
                mm.normalize_weights()

                path_map = PRM(json_data['prmSize'], graph_seed, mm, nodes={})
                path_map.generate_points(mm, (json_data['startPos']['x'], json_data['startPos']['y']), (json_data['endPos']['x'], json_data['endPos']['y']))
                path_map.connect_nodes_knn(json_data['knnSize'])
            else:
                path_map = generate_prm_from_json(json_data['nodes'], mm, json_data["graphSeed"])

            mm.longest_edge = path_map.longest_edge
            startPos = path_map.nodes[str(json_data['startPos']['x']) + "," + str(json_data['startPos']['y'])]
            endPos = path_map.nodes[str(json_data['endPos']['x']) + "," + str(json_data['endPos']['y'])]

            speed = json_data['speedPref']
            energy = json_data['energyPref']
            safety = json_data['safetyPref']

            if json_data["test"]["randomizeUserPrefs"]:
                speed = float(randint(0, 100))
                energy = float(randint(0, 100))
                safety = float(randint(0, 100))
            
            if(speed + energy + safety == 0):
                speed = float(randint(0, 100))
                energy = float(randint(0, 100))
                safety = float(randint(0, 100))

            result = {}

            if(json_data['test']['runAstar']):
                path_map.reset()
                start_time2 = time.time_ns()// 1000000
                astar2 = Astar(startPos, endPos, speed = speed, energy = energy, safety = safety)
                astar2.find_path(mm, vanilla=True)
                elapsed_time2 = (time.time_ns()// 1000000) - start_time2
                result["vanilla"] = {}
                result["vanilla"]["costs"] = {}
                result["vanilla"]["time"] = elapsed_time2
                result["vanilla"]["costs"]["speedCost"] = astar2.path_costs["speed"]
                result["vanilla"]["costs"]["safetyCost"] = astar2.path_costs["safety"]
                result["vanilla"]["costs"]["energyCost"] = astar2.path_costs["energy"]
                result["vanilla"]["costs"]["speedCostRaw"] = astar2.path_costs["speed_raw"]
                result["vanilla"]["costs"]["energyCostRaw"] = astar2.path_costs["energy_raw"]
                result["vanilla"]["costs"]["distance"] = astar2.path_costs["distance"]
                result["vanilla"]["costs"]["limit"] = astar2.path_costs["limit"]

            path_map.reset()
            start_time = time.time_ns() // 1000000
            astar = Astar(startPos, endPos, speed = speed, energy = energy, safety = safety)
            astar.find_path(mm)
            elapsed_time = (time.time_ns() // 1000000) - start_time

            result["prefs"] = {}
            result["costs"] = {}
            result["config"] = {}
            result["map"] = {}

            result["prefs"]["speedPref"] = speed
            result["prefs"]["safetyPref"] = safety
            result["prefs"]["energyPref"] = energy
            result["costs"]["speedCost"] = astar.path_costs["speed"]
            result["costs"]["safetyCost"] = astar.path_costs["safety"]
            result["costs"]["energyCost"] = astar.path_costs["energy"]
            result["costs"]["speedCostRaw"] = astar.path_costs["speed_raw"]
            result["costs"]["energyCostRaw"] = astar.path_costs["energy_raw"]
            result["costs"]["distance"] = astar.path_costs["distance"]
            result["costs"]["limit"] = astar.path_costs["limit"]
            result["map"]["mapSeed"] = map_seed
            result["map"]["graph_seed"] = graph_seed
            result["map"]["cellSize"] = json_data["cellSize"]
            result["map"]["mapSize"] = json_data["mapSize"]
            result["map"]["prmSize"] = json_data["prmSize"]
            result["map"]["knnSize"] = json_data["knnSize"]
            result["map"]["mapAmplitude"] = json_data["mapAmplitude"]
            result["map"]["startPosX"] = json_data['startPos']['x']
            result["map"]["startPosY"] = json_data['startPos']['y']
            result["map"]["endPosX"] = json_data['endPos']['x']
            result["map"]["endPosY"] = json_data['endPos']['y']
            result["config"]["maxSpeed"] = config.max_speed
            result["config"]["stepUp"] = config.max_step_height_down
            result["config"]["stepDown"] = config.max_step_height_down
            result["config"]["inclineUp"] = config.max_incline_up
            result["config"]["inclineDown"] = config.max_incline_down
            result["config"]["minEnergy"] = config.min_energy_per_unit
            result["config"]["mass"] = config.mass
            result["config"]["width"] = config.width
            result["time"] = elapsed_time

            test_results.append(result)
            print(speed, safety, energy)
            print(astar.path_costs)
            astar = {}
    return jsonify({
        "results": test_results
    })

@app.route('/mapsizetest', methods=['POST'])
def runMapSizeTest(): 
    json_data = request.get_json() 
    test_results = []
    config = RobotConfig(json_data['config']['maxSpeed'], json_data['config']['stepUp'], json_data['config']['stepDown'], json_data['config']['inclineUp'], json_data['config']['inclineDown'], json_data['config']['minEnergy'])
    config.user_init(json_data['config']['mass'], 0.01, 1, json_data['config']['width'])

    speed = json_data['speedPref']
    energy = json_data['energyPref']
    safety = json_data['safetyPref']

    for m in range(json_data['test']['startMapSize'], json_data['test']['endMapSize'] + 1, json_data['test']['mapSizeIncrement']):
        result = {}
        times = []
        times_vanilla = []
        for n in range(json_data['test']['mapSizeCount']):
            print("MapSizeCount: ", n, "mapSize:", m)
            map_seed = randint(1, 10000000)
            mm = Map(config=config, cell_size=json_data["cellSize"])
            mm.generate_random_map(m, 1/64, 8, seed = map_seed, amplitude=json_data['mapAmplitude'])
            mm.normalize_weights()

            graph_seed = randint(1, 10000000)
            prmSize = m * m * (json_data['test']['prmPercentage'] / 100)
            path_map = PRM(prmSize, graph_seed, mm, nodes={})
            startPos = (int(-m/2),int(m/2 - 1))
            endPos = (int(m/2 - 1),int(-m/2))
            path_map.generate_points(mm, a=(startPos[0], startPos[1]), b=(endPos[0], endPos[1]))
            path_map.connect_nodes_knn(json_data['knnSize'])
            mm.longest_edge = path_map.longest_edge
            
            startPos = path_map.nodes[str(startPos[0]) + "," + str(startPos[1])]
            endPos = path_map.nodes[str(endPos[0]) + "," + str(endPos[1])]



            for i in range(json_data['test']['mapSizeSample']):
                print("------------ Running Trial:", i, "Map Size:", m, "Map Number:", n, "---------------")
                path_map.reset()
                start_time = time.time_ns() // 1000000
                astar = Astar(startPos, endPos, speed = speed, energy = energy, safety = safety)
                astar.find_path(mm)
                elapsed_time = (time.time_ns() // 1000000) - start_time
                times.append(elapsed_time)

                path_map.reset()
                start_time = time.time_ns() // 1000000
                astar2 = Astar(startPos, endPos, speed = speed, energy = energy, safety = safety)
                astar2.find_path(mm, vanilla=True)
                elapsed_time = (time.time_ns() // 1000000) - start_time
                times_vanilla.append(elapsed_time)
        
        result["avgTime"] = np.mean(times)
        result["avgTimeVanilla"] = np.mean(times_vanilla)
        test_results.append(result)


    return jsonify({
        "results": test_results
    })


@app.route('/prmsizetest', methods=['POST'])
def runPRMSizeTest():
    print("TEST")
    json_data = request.get_json() 
    test_results = []
    config = RobotConfig(json_data['config']['maxSpeed'], json_data['config']['stepUp'], json_data['config']['stepDown'], json_data['config']['inclineUp'], json_data['config']['inclineDown'], json_data['config']['minEnergy'])
    config.user_init(json_data['config']['mass'], 0.01, 1, json_data['config']['width'])

    speed = json_data['speedPref']
    energy = json_data['energyPref']
    safety = json_data['safetyPref']

    map_size = json_data['mapSize']
    final_results = np.zeros((int(-(json_data['test']['prmPercentageStart']-json_data['test']['prmPercentageEnd'])/ json_data['test']['prmPercentageIncrement']) + 1, 5))
    
    for n in range(json_data['test']['prmPercentageMapCount']):
        print("-------")
        print(n)
        print("-------")
        # map_results = {}
        # map_results["time"] = []
        # map_results["cost"] = []
        # map_results["percentage"] = []
        map_results = np.empty((int(-(json_data['test']['prmPercentageStart']-json_data['test']['prmPercentageEnd'])/ json_data['test']['prmPercentageIncrement']) + 1,5))
        map_seed = randint(1, 10000000)
        mm = Map(config=config, cell_size=json_data["cellSize"])
        mm.generate_random_map(map_size, 1/64, 8, seed = map_seed, amplitude=json_data['mapAmplitude'])
        mm.normalize_weights()
        ii=0
        for m in range(json_data['test']['prmPercentageStart'], json_data['test']['prmPercentageEnd'] + 1, json_data['test']['prmPercentageIncrement']):
            print(ii)
            graph_seed = randint(1, 10000000)
            prmSize = map_size * map_size * m / 100
            path_map = PRM(prmSize, graph_seed, mm, nodes={})
            startPos = (int(-map_size/2),int(map_size/2 - 1))
            endPos = (int(map_size/2 - 1),int(-map_size/2))
            path_map.generate_points(mm, a=(startPos[0], startPos[1]), b=(endPos[0], endPos[1]))
            path_map.connect_nodes_knn(json_data['knnSize'])
            mm.longest_edge = path_map.longest_edge
            
            startPos = path_map.nodes[str(startPos[0]) + "," + str(startPos[1])]
            endPos = path_map.nodes[str(endPos[0]) + "," + str(endPos[1])]
            start_time = time.time_ns() // 1000000

            astar = Astar(startPos, endPos, speed = speed, energy = energy, safety = safety)
            astar.find_path(mm)
            elapsed_time = (time.time_ns() // 1000000) - start_time

            # map_results["time"].append(elapsed_time)
            # map_results["cost"].append(speed * astar.path_costs["speed"] + safety * astar.path_costs["safety"] + energy * astar.path_costs["energy"])
            # map_results["percentage"].append(m)
            map_results[ii][0] = m
            map_results[ii][1] = elapsed_time
            #map_results[ii][1] = speed * astar.path_costs["speed"] + safety * astar.path_costs["safety"] + energy * astar.path_costs["energy"]
            map_results[ii][2] = astar.path_costs["speed_raw"]
            map_results[ii][3] = astar.path_costs["safety"]
            map_results[ii][4] = astar.path_costs["energy_raw"]
            
            ii+=1

        #maxCost = max(map_results[:,1])
        maxCostSpeed = max(map_results[:,2])
        maxCostSafety = max(map_results[:,3])
        maxCostEnergy = max(map_results[:,4])
        
        #minCost = min(map_results[:,1])
        minCostSpeed = min(map_results[:,2])
        minCostSafety = min(map_results[:,3])
        minCostEnergy = min(map_results[:,4])

        maxTime = max(map_results[:,1])
        minTime = min(map_results[:,1])

            #map_results[:,1] = [((map_results[i][1] - minCost) / (maxCost - minCost)) for i in range(len(map_results))]
            #map_results[:,2] = [((map_results[i][2] - minTime) / (maxTime - minTime)) for i in range(len(map_results))]

        #map_results[:,1] = [((map_results[i,1] - minCost) / (maxCost - minCost)) for i in range(len(map_results))]

        map_results[:,2] = [((map_results[i,2] - minCostSpeed) / (maxCostSpeed - minCostSpeed)) for i in range(len(map_results))]
        map_results[:,3] = [((map_results[i,3] - minCostSafety) / (maxCostSafety - minCostSafety)) for i in range(len(map_results))]
        map_results[:,4] = [((map_results[i,4] - minCostEnergy) / (maxCostEnergy - minCostEnergy)) for i in range(len(map_results))]

        map_results[:,1] = [((map_results[i,1] - minTime) / (maxTime - minTime)) for i in range(len(map_results))]

        final_results = np.add(final_results, map_results)
        #print(final_results)

            # for i in range(len(final_results)):
            #     final_results[i][0] = map_results[i][0]
            #     final_results[i][1] = final_results[i][1] + map_results[i][1]
            #     final_results[i][2] = final_results[i][2] + map_results[i][2]
    final_results = final_results/json_data['test']['prmPercentageMapCount']
    print(final_results)
    final_dict = {}
    for res in final_results:
        final_dict[str(res[0])] = {'time': res[1], 'speedCost': res[2], 'safetyCost': res[3], 'energyCost': res[4]}
    print(final_dict)



        # maxCost = max(map_results["cost"])
        # minCost = min(map_results["cost"])

        # maxTime = max(map_results["time"])
        # minTime = min(map_results["time"])
        

        # map_results["cost"] = [((map_results["cost"][i] - minCost) / (maxCost - minCost)) for i in range(len(map_results["cost"]))]
        # map_results["time"] = [((map_results["time"][i] - minTime) / (maxTime - minTime)) for i in range(len(map_results["time"]))]

        
        #test_results.append(map_results)
        

    

    # final_results = [[0, [], []]] * len(test_results[0]["percentage"])
    # print(final_results)
    # for t, test in enumerate(test_results):
    #     for i in range(len(test["percentage"])):
    #         final_results[i][0] = test["percentage"][i]
    #         final_results[i][1].append(test["cost"][i]) 
    #         final_results[i][2].append(test["time"][i])

    # for i in range(len(test_results[0]["percentage"])):
    #     final_results[i][1] = np.mean(final_results[i][1])
    #     final_results[i][2] = np.mean(final_results[i][2])

    
    return jsonify({
        "results": final_dict
    })


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000), host='0.0.0.0')