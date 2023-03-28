from map import Map
from drawer import Drawer
from graphs import PRM, Grid
from pathfinding import Astar
from robot import RobotConfig
import numpy as np
import time

from flask import Flask, jsonify, request

app = Flask(__name__)

# Endpoint to get all fruits
@app.route('/', methods=['GET'])
def get_path():
    config = RobotConfig(3, 0.3, 0.3, 100, 100, 500)
    config.user_init(20, 0.01, 1, 0.225)
    seed = 231
    my_map = Map(config=config)
    my_map.generate_blank_map(32)
        
    my_map.setCell(2, 2, 1.0)
    my_map.setCell(-2, -2, 1.0)

    my_map.normalize_weights()

    startTime = time.perf_counter()
    path_map = PRM(600, seed, my_map)
    path_map.generate_points(my_map, (-16,15), (15, -16))
    path_map.connect_nodes_knn(7)
    astar = Astar(path_map.nodes['-16,15'], path_map.nodes['15,-16'])
    astar.find_path(my_map)


    return "hi!"

if __name__ == '__main__':
    app.run(debug=True)