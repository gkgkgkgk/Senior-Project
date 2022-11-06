import numpy as np
from graph import Node

def generate_prm(n_points, k, grid_size, bounds):
    

    nodes = []
    nodes.append(Node(bounds[0][0], bounds[1][0]))
    nodes.append(Node(bounds[0][1], bounds[1][1]))
    coords = []
    i = 0
    while i < n_points:
        num_x = np.random.randint(bounds[0][0] / grid_size, 1 + bounds[0][1] / grid_size) * grid_size
        num_y = np.random.randint(bounds[1][0] / grid_size, 1 + bounds[0][1] / grid_size) * grid_size
        node = Node(num_x, num_y)
        
        if (num_x, num_y) not in coords:
            nodes.append(node)
            coords.append((num_x, num_y))
            i += 1

    for node in nodes:
        node.connect_to_k_nearest_neighbors(nodes, k)

    return nodes