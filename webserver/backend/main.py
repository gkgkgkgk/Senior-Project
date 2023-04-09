from flask import Flask, request
from flask import jsonify
import json
import os
from api_utils import example
from robot import RobotConfig
from map import Map
from flask_cors import CORS
from graphs import PRM, Grid
from pathfinding import Astar

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
    print(len(mm.cells))
    path_map = PRM(json_data['prmSize'], json_data['graphSeed'], mm)

    path_map.generate_points(mm, (json_data['startPos']['x'], json_data['startPos']['y']), (json_data['endPos']['x'], json_data['endPos']['y']))
    print(path_map.nodes)
    path_map.connect_nodes_knn(json_data['knnSize'])
    nodes = []
    for n in path_map.nodes:
        edges = []

        for e in path_map.nodes[n].edges:
            edges.append({'x': e.x, 'y': e.y})

        node = {'x': path_map.nodes[n].x, "y":path_map.nodes[n].y, "edges": edges}
        nodes.append(node)
    print(nodes)
    return jsonify({
        "nodes": nodes
    })


# @app.route('/get-path')
# def getPath():    
#     args = request.args
#     nodes = []

#     astar = Astar(path_map.nodes['-16,15'], path_map.nodes['15,-16'])
#     astar.find_path(my_map)
    
#     return jsonify({
#         "nodes": nodes
#     })

# @app.route('/')
# def index():
#     path = example()
#     pathlist = []
#     for node in path:
#         pathlist.append((node.x, node.y))
#     return json.dumps(pathlist)


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000), host='0.0.0.0')