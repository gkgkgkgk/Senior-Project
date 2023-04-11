from flask import Flask, request
from flask import jsonify
import json
import os
from api_utils import example
from robot import RobotConfig
from map import Map
from flask_cors import CORS
from graphs import PRM, Node
from pathfinding import Astar
from random import *

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# config = RobotConfig(3, 0.3, 0.3, 100, 100, 500)
# config.user_init(20, 0.01, 1, 0.225)
# seed = 123
# path_map = PRM(600, seed, my_map)

@app.route('/get-map', methods=['POST'])
def getMap():
    json_data = request.get_json()

    mm = Map()

    mm.generate_random_map(json_data['mapSize'], 1/64, 8, seed = json_data['mapSeed'])
    mm.normalize_weights()

    celllist = [{'x': cell.x, 'y': cell.y, 'raw_weight': cell.raw_weight, 'normalized_weight': cell.normalized_weight} for cell in mm.cells]

    return jsonify({
        'cells': celllist
    })


@app.route('/get-prm', methods=['POST'])
def getPRM():    
    json_data = request.get_json()
    cells = [{'x': cell['x'], 'y': cell['y'], 'raw_weight': cell['raw_weight'], 'normalized_weight': cell['normalized_weight']} for cell in json_data['cells']]

    mm = Map(cells=cells)

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
    mm = Map(cells=cells, config=config)

    nodes = {}
    for n in json_data['nodes']:
        nodes[str(n['x']) + "," + str(n['y'])] = Node(n['x'], n['y'])

    for n in json_data['nodes']:
        edges = []
        for edge in n['edges']:
            edges.append(nodes[str(edge['x'])+","+str(edge['y'])])
        
        nodes[str(n['x']) + "," + str(n['y'])].edges = edges

    path_map = PRM(len(nodes), json_data['graphSeed'], mm, nodes=nodes)

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
    mm = Map(cells=cells, config=config)

    nodes = {}
    for n in json_data['nodes']:
        nodes[str(n['x']) + "," + str(n['y'])] = Node(n['x'], n['y'])

    for n in json_data['nodes']:
        edges = []
        for edge in n['edges']:
            edges.append(nodes[str(edge['x'])+","+str(edge['y'])])
        
        nodes[str(n['x']) + "," + str(n['y'])].edges = edges

    path_map = PRM(len(nodes), json_data['graphSeed'], mm, nodes=nodes)

    startPos = path_map.nodes[str(json_data['startPos']['x']) + "," + str(json_data['startPos']['y'])]
    endPos = path_map.nodes[str(json_data['endPos']['x']) + "," + str(json_data['endPos']['y'])]

    test_results = []

    for i in range(trials):
        if json_data["test"]["randomizeMap"]:
            mm = Map()
            mm.generate_random_map(32, 1/64, 8, seed=randint(1, 10000000))
            path_map = PRM(700, randint(1, 10000000), mm)
            path_map.connect_nodes_knn(7)
        
        speed = json_data['speedPref']
        energy = json_data['energyPref']
        safety = json_data['safetyPref']

        if json_data["test"]["randomizeUserPrefs"]:
            speed = randint(0, 100)
            energy = randint(0, 100)
            safety = randint(0, 100)

        astar = Astar(startPos, endPos, speed = speed, energy = energy, safety = safety)
        astar.find_path(mm)
        test_results.append([speed, safety, energy, astar.path_costs["speed"], astar.path_costs["safety"], astar.path_costs["energy"]])

    return jsonify({
        "results": test_results
    })




if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000), host='0.0.0.0')