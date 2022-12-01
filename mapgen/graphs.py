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

            plus_x = np.random.randint(0, 1)
            plus_y = np.random.randint(-1, 0)

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

# class PathMap:
#     def __init__(self, my_map):
#         self.map = my_map
#         self.nodes = {}

#     def init_uniform(self):
#         for cell in self.map.cells:
#             self.addNode(cell.x, cell.y)
#             self.addNode(cell.x + 1, cell.y)
#             self.addNode(cell.x + 1, cell.y - 1)
#             self.addNode(cell.x, cell.y - 1)
    
#     def init_prm(self):


#     def addNode(self, x, y):
#         node = Node(x, y)
#         index = str(x)+","+str(y)
#         self.nodes[index] = node
    
#     def sample(self, x, y):
#         return self.nodes(str(x)+","+str(y))

#     def calculate_cost(self, x1, y1, x2, y2):
#         a = Node(x1, y1)
#         b = Node(x2, y2)
#         cells = []

#         if (b.x == a.x): # vertical line case
#             score = 0
#             for y in range(b.y, a.y):
#                 left = self.sample(a.x - 1, y)
#                 right = self.sample(a.x, y)
#                 score += (self.normalize_weight(right.h) + self.normalize_weight(left.h)) / 2
#             return score
#         if (b.y == a.y): # horizontal line case
#             score = 0
#             for x in range(b.x, a.x):
#                 top = self.sample(x, a.y - 1)
#                 bottom = self.sample(x, a.y)
#                 score += (self.normalize_weight(top.h) + self.normalize_weight(bottom.h)) / 2
#             return score

#         dif_x = b.x - a.x
#         dif_y = b.y - a.y
#         dist = abs(dif_x) + abs(dif_y)
#         dx = dif_x /dist
#         dy = dif_y /dist

#         for i in range(int(np.ceil(dist))):
#             x = np.floor(a.x + dx * i)
#             y = np.floor(a.y + dy * i)
#             if (x, y) not in cells:
#                 cells.append((x, y))
        
#         total_line = LineString([(a.x, a.y), (b.x, b.y)])
#         score = 0

#         cells_lengths = []
#         for i in range(len(cells)):
#             cell = cells[i]
#             cell_shape = Polygon([(cell[0],cell[1]), (cell[0] + 1, cell[1]), (cell[0]+1, cell[1] + 1), (cell[0],cell[1]+1)]) 
#             line = cell_shape.intersection(total_line)
#             if type(line) == LineString:
#                 cell_obj = self.map.sampleCell(cell[0], cell[1])
#                 h = self.normalize_weight(cell_obj.raw_weight)
#                 score += (line.length * h)
#                 cells_lengths.append((cell_obj, line.length))

#         print(cells_lengths)
#         print(self.speed_cost(cells_lengths))
#         return score

#     def speed_cost(self, cells_lengths):
#         score = 0
#         max_step = 1
        
#         for i in range(1, len(cells_lengths)):
#             cell = cells_lengths[i][0]
#             prev_cell = cells_lengths[i-1][0]
#             if cell.raw_weight - prev_cell.raw_weight > max_step:
#                 score += 100
#             else:
#                 score += 1
#         return score
        
#     def normalize_weight(self, score):
#         return (255.0 - score) / 255.0


# class Node:
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y