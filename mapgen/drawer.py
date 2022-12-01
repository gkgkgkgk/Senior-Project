import pygame
import numpy as np

class Drawer:
    def __init__(self, screen):
        self.screen = screen
        self.window_size, _ = pygame.display.get_surface().get_size()
    
    def drawMap(self, my_map, random_colors=False):
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
            color = self.weight_to_color(cell.weight)

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
            text = font.render(str(round(cell.raw_weight, 2)), True, (255, 255, 255), (0, 0, 0))
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
            x = (center - cell_size/2) + cell_size * (node.x)
            y = (center - cell_size/2) + cell_size * (-node.y)
            for edge in node.edges:
                edge_x = (center - cell_size/2) + cell_size * (edge.x)
                edge_y = (center - cell_size/2) + cell_size * (-edge.y)
                pygame.draw.line(self.screen, (50, 150, 50), (x, y), (edge_x, edge_y), width = 2)

        for pos in prm.nodes:
            node = prm.nodes[pos]
            x = (center - cell_size/2) + cell_size * (node.x)
            y = (center - cell_size/2) + cell_size * (-node.y)
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

            ax = (center - cell_size/2) + cell_size * (a.x)
            ay = (center - cell_size/2) + cell_size * (-a.y)

            bx = (center - cell_size/2) + cell_size * (b.x)
            by = (center - cell_size/2) + cell_size * (-b.y)
            pygame.draw.line(self.screen, (255, 0, 0), (ax, ay), (bx, by), width = 2)

    def random_color(self):
        return tuple(np.random.randint(256, size=3))
    
    def weight_to_color(self, weight):
        c = 255 - (200 * abs(weight))

        if weight < 0:
            return (255, c, c)

        return (c, c, 255)

        