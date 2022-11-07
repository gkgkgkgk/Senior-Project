import numpy as np
from graph import Node

def generate_prm(n_points, k, mymap):
    

    nodes = []
    nodes.append(Node(mymap.bounds[0][0], mymap.bounds[1][0]))
    nodes.append(Node(mymap.bounds[0][1], mymap.bounds[1][1]))
    coords = []
    i = 0
    while i < n_points:
        num_x = np.random.randint(mymap.bounds[0][0] / mymap.grid_size, 1 + mymap.bounds[0][1] / mymap.grid_size) * mymap.grid_size
        num_y = np.random.randint(mymap.bounds[1][0] / mymap.grid_size, 1 + mymap.bounds[0][1] / mymap.grid_size) * mymap.grid_size
        node = Node(num_x, num_y)
        
        if (num_x, num_y) not in coords and not in_obstacle(num_x, num_y, mymap.obstacles):
            nodes.append(node)
            coords.append((num_x, num_y))
            i += 1

    for node in nodes:
        node.connect_to_k_nearest_neighbors(nodes, k, mymap.obstacles)

    return nodes

def in_obstacle(x, y, obstacles):
    for obstacle in obstacles:
        if (x > obstacle.x and x < obstacle.x + obstacle.w) and (y > obstacle.y and y < obstacle.y + obstacle.h):
            return True
    return False