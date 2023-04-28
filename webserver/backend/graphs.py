import numpy as np
from cell_intersect import get_intersect_cells

class PRM:
    def __init__(self, n_points, seed, my_map, nodes={}):
        self.n_points = n_points
        self.nodes = nodes
        self.my_map = my_map
        np.random.seed(seed)
        self.longest_edge = 0
        self.find_longest_edge()

    def sample_node(self, x, y):
        key = str(x)+","+str(y)
        if key in self.nodes.keys():
            return self.nodes[key]
        return None

    def reset(self):
        for node in self.nodes:
            self.nodes[node].parent = 0
            self.nodes[node].f = 100000000
            self.nodes[node].g = 0
            self.nodes[node].h = 0

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
            for edge in node.edges:
                if edge.distance(node) > self.longest_edge:
                    self.longest_edge = edge.distance(node)

    def find_longest_edge(self):
        for pos in self.nodes:
            node = self.nodes[pos]
            for edge in node.edges:
                if edge.distance(node) > self.longest_edge:
                    self.longest_edge = edge.distance(node)

    def find_knn(self, node, k):
        nearest = sorted(self.nodes, key = lambda child: node.distance(self.nodes[child]))[1:]

        nodes = []
        i = k
        for child in nearest:
            limit = False
            # cells = get_intersect_cells([node.x, node.y], [self.nodes[child].x, self.nodes[child].y])
            # if self.my_map.limitation_cost(cells, check_clearence=True) > 0:
            #     limit = True
            
            if not limit:
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
        self.nodes = {}
        self.resolution = resolution
    
    def generate_points(self, terrain):
        for i in range(0, len(terrain.cells), self.resolution):
            x = terrain.cells[i].x
            y = terrain.cells[i].y
            node = Node(x, y)
            self.nodes[str(x) + "," + str(y)] = node

        for pos in self.nodes:
            node = self.nodes[pos]
            x = node.x
            y = node.y

            # connect each cell with all 8 neighbors.
            if self.sample_node(x+self.resolution, y) != None:
                node.edges.append(self.sample_node(x+self.resolution, y))
            if self.sample_node(x-self.resolution, y) != None:
                node.edges.append(self.sample_node(x-self.resolution, y))
            if self.sample_node(x, y+self.resolution) != None:
                node.edges.append(self.sample_node(x, y+self.resolution))
            if self.sample_node(x, y-self.resolution) != None:
                node.edges.append(self.sample_node(x, y-self.resolution))
            if self.sample_node(x+self.resolution, y+self.resolution) != None:
                node.edges.append(self.sample_node(x+self.resolution, y+self.resolution))
            if self.sample_node(x-self.resolution, y-self.resolution) != None:
                node.edges.append(self.sample_node(x-self.resolution, y-self.resolution))
            if self.sample_node(x-self.resolution, y+self.resolution) != None:
                node.edges.append(self.sample_node(x-self.resolution, y+self.resolution))
            if self.sample_node(x+self.resolution, y-self.resolution) != None:
                node.edges.append(self.sample_node(x+self.resolution, y-self.resolution))

    def sample_node(self, x, y):
        key = str(x)+","+str(y)
        if key in self.nodes.keys():
            return self.nodes[key]
        return None


class Node:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.edges = []
        self.parent = 0
        self.f = 100000000
        self.g = 0
        self.h = 0

    def __repr__(self):
        return "(" + str(self.x) + ", " + str(self.y) + ")" + ", h: " + str(self.h) + ", g: " + str(self.g)
    
    def sample_edge(self, node):
        for edge in self.edges:
            if edge.x == node.x and edge.y == node.y:
                return node
        return None
    
    def distance(self, node, cell_size=1):
        return np.sqrt((node.x - self.x) ** 2 + (node.y - self.y) ** 2) * cell_size