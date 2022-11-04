import numpy as np
from graph import Node

def generate_prm(n_points, k, grid_size, map_dim, screen_dim):
    num_x = np.random.randint(0, map_dim[0] / grid_size, n_points) * grid_size + ((screen_dim[0] - map_dim[0])/2)
    num_y = np.random.randint(0, map_dim[1] / grid_size, n_points) * grid_size + ((screen_dim[1] - map_dim[1])/2)

    nodes = []
    for i in range(0, n_points):
        nodes.append(Node(num_x[i], num_y[i]))

    for node in nodes:
        node.connect_to_k_nearest_neighbors(nodes, k)

    return nodes