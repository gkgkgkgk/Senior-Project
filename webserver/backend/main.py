from flask import Flask, request
from flask import jsonify
import json
import os
from api_utils import example, generate_prm_from_json, defaultMap, clearenceMap
from robot import RobotConfig
from map import Map
from flask_cors import CORS
from graphs import PRM, Node
from pathfinding import Astar
from random import *
import time

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
    astar.find_path(mm)
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

            
            start_time = time.time_ns() // 1000000
            astar = Astar(startPos, endPos, speed = speed, energy = energy, safety = safety)
            astar.find_path(mm)
            elapsed_time = (time.time_ns() // 1000000) - start_time
            result = {}
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


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000), host='0.0.0.0')