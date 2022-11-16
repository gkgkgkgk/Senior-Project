import pygame
import numpy as np

class Drawer:
    def __init__(self, screen):
        self.screen = screen
        self.window_size, _ = pygame.display.get_surface().get_size()
    
    def drawMap(self, map, random_colors=False):
        min_x = min((cell.x) for cell in map.cells)
        max_x = max((cell.x) for cell in map.cells)
        min_y = min((cell.y) for cell in map.cells)
        max_y = max((cell.y) for cell in map.cells)

        max_size = max(abs(min_x), abs(min_y), max_x, max_y)
        cell_size = int(self.window_size / (max_size* 2 + 1))

        for cell in map.cells:
            left = cell_size * (cell.x + max_size)
            top = cell_size * (-cell.y + max_size)
            color = self.weight_to_color(cell.weight)

            if random_colors:
                color = self.random_color()

            pygame.draw.rect(self.screen, color, pygame.Rect(left, top, cell_size, cell_size))

    def random_color(self):
        return tuple(np.random.randint(256, size=3))
    
    def weight_to_color(self, weight):
        c = 255 - (200 * abs(weight))

        if weight < 0:
            return (c, 0, 0)

        return (0, 0, c)

        