import pygame
import numpy as np
import matplotlib.pyplot as plt

class Drawer:
    def __init__(self, screen):
        self.screen = screen
        self.window_size, _ = pygame.display.get_surface().get_size()
    
    def drawMap(self, my_map, random_colors=False):
        my_map.normalize_weights()
        min_x = min((cell.x) for cell in my_map.cells)
        max_x = max((cell.x) for cell in my_map.cells)
        min_y = min((cell.y) for cell in my_map.cells)
        max_y = max((cell.y) for cell in my_map.cells)

        max_size = max(abs(min_x), abs(min_y), max_x, max_y) + 1
        cell_size = int(self.window_size / (max_size* 2))

        for cell in my_map.cells:
            center = int(self.window_size / 2)
            left = (center - cell_size/2) + cell_size * (cell.x)
            top = (center - cell_size/2) + cell_size * (-cell.y)
            color = self.weight_to_color(cell.normalized_weight)

            if random_colors:
                color = self.random_color()

            pygame.draw.rect(self.screen, color, pygame.Rect(left, top, cell_size, cell_size))

    def draw_weight(self, my_map, pos):
        min_x = min((cell.x) for cell in my_map.cells)
        max_x = max((cell.x) for cell in my_map.cells)
        min_y = min((cell.y) for cell in my_map.cells)
        max_y = max((cell.y) for cell in my_map.cells)

        max_size = max(abs(min_x), abs(min_y), max_x, max_y) + 1
        cell_size = int(self.window_size / (max_size* 2))
        center = int(self.window_size / 2)

        x_pos = -int((center - cell_size/2 - pos[0]) / (cell_size))
        if pos[0] < center:
            x_pos = -int((center + cell_size/2 - pos[0]) / (cell_size))

        y_pos = int((center - cell_size/2 - pos[1]) / (cell_size))
        if pos[1] < center:
            y_pos = int((center + cell_size/2 - pos[1]) / (cell_size))

        cell = my_map.sampleCell(x_pos, y_pos)

        if cell != None:
            font = pygame.font.Font('freesansbold.ttf', 16)
            text = font.render(str(cell.x) + ',' + str(cell.y) + ', '+ str(round(cell.raw_weight, 2)), True, (255, 255, 255), (0, 0, 0))
            textRect = text.get_rect()
            textRect.center = (pos[0], pos[1])
            self.screen.blit(text, textRect)
    
    def draw_prm(self, prm, my_map):
        min_x = min((cell.x) for cell in my_map.cells)
        max_x = max((cell.x) for cell in my_map.cells)
        min_y = min((cell.y) for cell in my_map.cells)
        max_y = max((cell.y) for cell in my_map.cells)

        max_size = max(abs(min_x), abs(min_y), max_x, max_y) + 1
        cell_size = int(self.window_size / (max_size* 2))
        center = int(self.window_size / 2)

        for pos in prm.nodes:
            node = prm.nodes[pos]
            x = (center - cell_size/2) + cell_size * (node.x) + cell_size/2
            y = (center - cell_size/2) + cell_size * (-node.y) + cell_size/2
            for edge in node.edges:
                edge_x = (center - cell_size/2) + cell_size * (edge.x) + cell_size/2
                edge_y = (center - cell_size/2) + cell_size * (-edge.y) + cell_size/2
                pygame.draw.line(self.screen, (50, 150, 50), (x, y), (edge_x, edge_y), width = 2)

        for pos in prm.nodes:
            node = prm.nodes[pos]
            x = (center - cell_size/2) + cell_size * (node.x) + cell_size/2
            y = (center - cell_size/2) + cell_size * (-node.y) + cell_size/2
            pygame.draw.circle(self.screen, (100, 200, 100), (x, y), 5)

    def draw_path(self, pathfinder, my_map):
        min_x = min((cell.x) for cell in my_map.cells)
        max_x = max((cell.x) for cell in my_map.cells)
        min_y = min((cell.y) for cell in my_map.cells)
        max_y = max((cell.y) for cell in my_map.cells)

        max_size = max(abs(min_x), abs(min_y), max_x, max_y) + 1
        cell_size = int(self.window_size / (max_size* 2))
        center = int(self.window_size / 2)

        for i in range(len(pathfinder.path) - 1):
            a = pathfinder.path[i]
            b = pathfinder.path[i+1]

            ax = (center - cell_size/2) + cell_size * (a.x) + cell_size/2
            ay = (center - cell_size/2) + cell_size * (-a.y) + cell_size/2

            bx = (center - cell_size/2) + cell_size * (b.x) + cell_size/2
            by = (center - cell_size/2) + cell_size * (-b.y) + cell_size/2
            pygame.draw.line(self.screen, (20, 255, 20), (ax, ay), (bx, by), width = 10)

    def draw_edge_costs(self, prm, my_map, destination):
        min_x = min((cell.x) for cell in my_map.cells)
        max_x = max((cell.x) for cell in my_map.cells)
        min_y = min((cell.y) for cell in my_map.cells)
        max_y = max((cell.y) for cell in my_map.cells)

        max_size = max(abs(min_x), abs(min_y), max_x, max_y) + 1
        cell_size = int(self.window_size / (max_size* 2))
        center = int(self.window_size / 2)

        for pos in prm.nodes:
            node = prm.nodes[pos]
            x = (center - cell_size/2) + cell_size * (node.x) + cell_size/2
            y = (center - cell_size/2) + cell_size * (-node.y) + cell_size/2
            for edge in node.edges:
                edge_x = (center - cell_size/2) + cell_size * (edge.x) + cell_size/2
                edge_y = (center - cell_size/2) + cell_size * (-edge.y) + cell_size/2
                pygame.draw.line(self.screen, (50, 150, 50), (x, y), (edge_x, edge_y), width = 2)

                h, g = my_map.calculate_cost(node, edge, destination)
                font = pygame.font.Font('freesansbold.ttf', 16)
                text = font.render(str(round(g, 2)), True, (255, 255, 255), (0, 0, 0))
                textRect = text.get_rect()
                mid_x = (x + edge_x) / 2
                mid_y = (y + edge_y) / 2
                textRect.center = (mid_x, mid_y)
                self.screen.blit(text, textRect)


    def random_color(self):
        return tuple(np.random.randint(256, size=3))

    def graphic(self, my_map, pathfinders):
        f = open('graphdata.txt', 'w')

        for cell in my_map.cells:
            f.write('CELL,' + str(cell.x) + ',' + str(cell.y) + ',' + str(cell.raw_weight) + '\n')

        for i, path in enumerate(pathfinders):
            for point in path.path:
                f.write('POINT,' + str(i) + ',' + str(point.x) + ',' + str(point.y) + '\n')

    def weight_to_color(self, weight):
        c = 255 - (200 * abs(weight))

        if weight < 0:
            return (255, c, c)

        return (c, c, 255)

        