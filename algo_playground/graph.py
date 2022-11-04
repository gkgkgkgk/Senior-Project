import numpy as np

class Node:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.edges = []

    def __repr__(self):
        return "(" + str(self.x) + ", " + str(self.y) + ")"

    def distance(self, node):
        return np.sqrt((node.x - self.x) ** 2 + (node.y - self.y) ** 2)
    
    def connect_to_k_nearest_neighbors(self, nodes, k):
        self.edges = find_k_nearest_neighbors(self, nodes, k)

def find_k_nearest_neighbors(root, nodes, k):
    return sorted(nodes, key = lambda node: root.distance(node))[1:k+1]