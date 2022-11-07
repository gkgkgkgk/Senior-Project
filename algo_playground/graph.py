import numpy as np
from shapely.geometry import LineString

class Node:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.edges = []
        # self.g = np.random.randint(1, 5)
        self.g = 1
        self.h = 0
        self.f = self.g + self.h
        self.parent = 0

    def __repr__(self):
        return "(" + str(self.x) + ", " + str(self.y) + ")"

    def distance(self, node):
        return np.sqrt((node.x - self.x) ** 2 + (node.y - self.y) ** 2)
    
    def connect_to_k_nearest_neighbors(self, nodes, k, obstacles):
        self.edges.extend(find_k_nearest_neighbors(self, nodes, k, obstacles))

def find_k_nearest_neighbors(parent, nodes, k, obstacles):
    nearest = sorted(nodes, key = lambda node: parent.distance(node))[1:]
    if obstacles == None:
        return nearest[:k+1]
    nearest_no_intersect = []
    i = k
    for child in nearest:
        if not through_obstacle(parent, child, obstacles):
            i -= 1

            if child not in parent.edges:
                nearest_no_intersect.append(child)
            if parent not in child.edges:
                child.edges.append(parent)

        if i <= 0:
            break

    return nearest_no_intersect


def through_obstacle(node1, node2, obstacles):
    for obstacle in obstacles:
        if line_intersect(obstacle.x, obstacle.y, obstacle.x + obstacle.w, obstacle.y, node1.x, node1.y, node2.x, node2.y):
            return True
        if line_intersect(obstacle.x, obstacle.y, obstacle.x, obstacle.y + obstacle.h, node1.x, node1.y, node2.x, node2.y):
            return True
        if line_intersect(obstacle.x, obstacle.y + obstacle.h, obstacle.x + obstacle.w, obstacle.y + obstacle.h, node1.x, node1.y, node2.x, node2.y):
            return True
        if line_intersect(obstacle.x + obstacle.w, obstacle.y + obstacle.h, obstacle.x + obstacle.w, obstacle.y, node1.x, node1.y, node2.x, node2.y):
            return True
        
    return False

def line_intersect(x1, y1, x2, y2, x3, y3, x4, y4):
    line = LineString([(x1, y1), (x2, y2)])
    other = LineString([(x3, y3), (x4, y4)])
    return line.intersects(other)