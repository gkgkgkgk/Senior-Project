from flask import Flask
from flask import jsonify
import json
import os
from api_utils import example
from robot import RobotConfig
from map import Map
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

config = RobotConfig(3, 0.3, 0.3, 100, 100, 500)
config.user_init(20, 0.01, 1, 0.225)
my_map = Map(config=config)

@app.route('/get-map')
def getMap():    
    my_map.generate_random_map(32, 1/64, 8, rocks=False)
    my_map.normalize_weights()

    celllist = [{'x': cell.x, 'y': cell.y, 'raw_weight': cell.raw_weight, 'normalized_weight': cell.normalized_weight} for cell in my_map.cells]

    return jsonify({
        'config': {
            'max_speed': config.max_speed,
            'max_step_height_up': config.max_step_height_up,
            'max_step_height_down': config.max_step_height_down,
            'max_incline_up': config.max_incline_up,
            'max_incline_down': config.max_incline_down,
            'min_energy_per_unit': config.min_energy_per_unit,
            'mass': config.mass,
            'friction': config.friction,
            'wheel_diameter': config.wheel_diameter,
            'width': config.width,
            'gravity': config.gravity,
        },
        'cells': celllist
    })


@app.route('/')
def index():
    path = example()
    pathlist = []
    for node in path:
        pathlist.append((node.x, node.y))
    return json.dumps(pathlist)


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000), host='0.0.0.0')