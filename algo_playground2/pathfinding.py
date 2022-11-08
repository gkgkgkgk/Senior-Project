import numpy as np
import pygame

class Astar:
    def __init__(self, start_node, end_node):
        self.start_node = start_node
        self.end_node = end_node
        self.path = []
    
    def draw(self, screen, terrain):
        for i in range(len(self.path) - 1):
            a = self.path[i]
            b = self.path[i+1]
            pygame.draw.line(screen, (0, 255, 50), (a.x * terrain.p, a.y* terrain.p), (b.x* terrain.p, b.y* terrain.p), width = 2)


    def find_path(self, terrain):
        opened = []
        closed = []

        opened.append(self.start_node)
        steps = 0

        while True:
            steps += 1
            
            if len(opened) == 0:
                print("No solution found!")
                break

            opened.sort(key = lambda node: node.f)
            selected_node = opened.pop(0)
            closed.append(selected_node)

            if selected_node.x == self.end_node.x and selected_node.y == self.end_node.y:
                totalCost = 0
                reversePath = []
                reversePath.append(selected_node)
                node = selected_node
                while node != self.start_node:
                    reversePath.append(node.parent)
                    node = node.parent
                    totalCost += node.f
                path = np.flip(reversePath)
                print("Total Cost: " + str(totalCost) + ", Amount of Nodes: " +str(len(path)))
                pct_err = ((totalCost / len(path)) - np.sqrt(2 * 600 * 2) ) / np.sqrt(2 * 600 * 2)
                print("Percent Error from Direct Path: " + str(pct_err))
                self.path = path
                return path
            
            children = selected_node.edges

            for child in children:
                score = child.distance(self.end_node) + terrain.calculate_line_cost(selected_node, child)

                if child in closed:
                    continue
                # if child.x == self.end_node.x and child.y == self.end_node.y:
                #     child.parent = selected_node
                #     opened.append(child)
                #     break
                if (child not in opened) or child.f > score:
                    child.f = score
                    child.parent = selected_node
                    if child not in opened:
                        opened.append(child)
