import numpy as np
from shapely.geometry import Polygon, LineString

class PRM:
    def __init__(self, n_points):
        self.n_points = n_points
        self.nodes = {}

    def sample_node(self, x, y):
        key = str(x)+","+str(y)
        if key in self.nodes.keys():
            return self.nodes[key]
        return None

    def generate_points(self, terrain, a=(0,0), b=(0,1)):
        self.nodes[str(a[0]) + "," + str(a[1])] = Node(a[0], a[1])
        self.nodes[str(b[0]) + "," + str(b[1])] = Node(b[0], b[1])

        while len(self.nodes) < self.n_points:
            cell = terrain.cells[np.random.randint(0, len(terrain.cells))]

            plus_x = 0
            plus_y = 0
            if self.sample_node(cell.x+plus_x, cell.y+plus_y) == None:
                node = Node(cell.x+plus_x, cell.y+plus_y)
                self.nodes[str(cell.x+plus_x) + "," + str(cell.y+plus_y)] = node
    
    def connect_nodes_knn(self, k):
        for pos in self.nodes:
            node = self.nodes[pos]
            node.edges.extend(self.find_knn(node, k))

    def find_knn(self, node, k):
        nearest = sorted(self.nodes, key = lambda child: node.distance(self.nodes[child]))[1:]

        nodes = []
        i = k
        for child in nearest:
            i -= 1
            if node.sample_edge(self.nodes[child]) == None:
                nodes.append(self.nodes[child])
            if self.nodes[child].sample_edge(node) == None:
                self.nodes[child].edges.append(node)
            if i <= 0:
                break

        return nodes
            
class Grid:
    def __init__(self, resolution):
        self.nodes = []
        self.resolution = resolution
    
    def generate_points(self, terrain):
        for i in range(1, terrain.resolution, self.resolution):
            for j in range(1, terrain.resolution, self.resolution):
                self.nodes.append(Node(i, j))
        
        for node in self.nodes:
            neighbors = []
            for i in range(node.x - self.resolution - 1, node.x + self.resolution + 1):
                for j in range(node.y - self.resolution - 1, node.y + self.resolution + 1):
                    if i == node.x and j == node.y:
                        continue
                    n = self.sample_node(i, j)
                    if n != None:
                        neighbors.append(n)

            node.edges = neighbors

    def sample_node(self, x, y):
        for node in self.nodes:
            if x == node.x and y == node.y:
                return node
        return None


class Node:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.edges = []
        self.parent = 0
        self.f = 0
        self.g = 0

    def __repr__(self):
        return "(" + str(self.x) + ", " + str(self.y) + ")"
    
    def sample_edge(self, node):
        for edge in self.edges:
            if edge.x == node.x and edge.y == node.y:
                return node
        return None
    
    def distance(self, node):
        return np.sqrt((node.x - self.x) ** 2 + (node.y - self.y) ** 2)