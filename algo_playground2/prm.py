import pygame
import numpy as np

class PRM:
    def __init__(self, n_points):
        self.n_points = n_points
        self.nodes = []

    def sample_node(self, x, y):
        for node in self.nodes:
            if node.x == x and node.y == y:
                return node
        return None

    def generate_points(self, terrain):
        self.nodes.append(Node(0,0))
        self.nodes.append(Node(terrain.resolution, terrain.resolution))

        while len(self.nodes) < self.n_points:
            num_x = np.random.randint(0, terrain.resolution+1)
            num_y = np.random.randint(0, terrain.resolution+1)

            if self.sample_node(num_x, num_y) == None:
                node = Node(num_x, num_y)
                self.nodes.append(node)
    
    def connect_nodes_knn(self, k):
        for node in self.nodes:
            node.edges.extend(self.find_knn(node, k))

    def find_knn(self, node, k):
        nearest = sorted(self.nodes, key = lambda chile: node.distance(chile))[1:]
        nodes = []
        i = k
        for child in nearest:
            i -= 1
            if node.sample_edge(child) == None:
                nodes.append(child)
            if child.sample_edge(node) == None:
                child.edges.append(node)
            if i <= 0:
                break

        return nodes

    def draw(self, screen, terrain):
        for node in self.nodes:
            for edge in node.edges:
                pygame.draw.line(screen, (180, 50, 50), (node.x * terrain.p, node.y* terrain.p), (edge.x* terrain.p, edge.y* terrain.p), width = 2)
        for node in self.nodes:
            node.draw(screen, terrain)
            

class Node:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.edges = []
    
    def draw(self, screen, terrain):
        pygame.draw.circle(screen, (0, 50,120), (self.x * terrain.p, self.y * terrain.p), 5)
    
    def sample_edge(self, node):
        for edge in self.edges:
            if edge.x == node.x and edge.y == node.y:
                return node
        return None
    
    def distance(self, node):
        return np.sqrt((node.x - self.x) ** 2 + (node.y - self.y) ** 2)
