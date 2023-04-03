import numpy as np
import pygame
from colour import Color
from noise import snoise3, snoise2
from shapely.geometry import Polygon, LineString

class Terrain:
    def __init__(self, resolution, freq, octaves, random=False):
        self.cells = []
        self.noise = None
        z = np.random.uniform(0, resolution)
        for x in range(resolution):
            for y in range(resolution):
                if random:
                    self.noise = snoise3(x / freq, y / freq, z / freq, octaves=octaves)
                else:
                    self.noise = snoise2(x / freq, y / freq, octaves)

                self.cells.append(Cell(x, y, int(self.noise * 127.0 + 128.0)))
        self.resolution = resolution
        w, _ = pygame.display.get_surface().get_size()
        self.p = w / self.resolution 

    def sample(self, x, y):
        for cell in self.cells:
            if int(x) == cell.x and int(y) == cell.y:
                return cell
        return None

    def draw(self, screen):
        colors = []
        for color in list(Color("grey").range_to(Color("white"), 5)):
            colors.append([i * 255 for i in color.rgb])

        w, _ = pygame.display.get_surface().get_size()
        for cell in self.cells:
            p = int(w / self.resolution)
            px = cell.x * p
            py = cell.y * p
            pygame.draw.rect(screen, (cell.h, cell.h, cell.h), pygame.Rect(px, py, p, p))
    
    def calculate_line_cost(self, a, b, screen=None, draw=False):
        cells = []
        
        if (b.x == a.x): # vertical line case
            score = 0
            for y in range(b.y, a.y):
                left = self.sample(a.x - 1, y)
                right = self.sample(a.x, y)
                score += (self.normalize_weight(right.h) + self.normalize_weight(left.h)) / 2
            return score
        if (b.y == a.y): # horizontal line case
            score = 0
            for x in range(b.x, a.x):
                top = self.sample(x, a.y - 1)
                bottom = self.sample(x, a.y)
                score += (self.normalize_weight(top.h) + self.normalize_weight(bottom.h)) / 2
            return score

        dif_x = b.x - a.x
        dif_y = b.y - a.y
        dist = abs(dif_x) + abs(dif_y)
        dx = dif_x /dist
        dy = dif_y /dist

        for i in range(int(np.ceil(dist))):
            x = np.floor(a.x + dx * i)
            y = np.floor(a.y + dy * i)
            if (x, y) not in cells:
                cells.append((x, y))
        
        if draw and screen != None:
            for coord in cells:
                pygame.draw.circle(screen, (200, 0,200), (coord[0] * self.p+ self.p/2, coord[1] * self.p+ self.p/2), 5)
            pygame.draw.circle(screen, (255, 0,255), (a.x * self.p, a.y * self.p), 10)
            pygame.draw.circle(screen, (255, 0,255), (b.x * self.p, b.y * self.p), 10)
            pygame.draw.line(screen, (0, 0, 255), (a.x* self.p, a.y* self.p), (b.x* self.p, b.y* self.p), width = 3)

        total_line = LineString([(a.x, a.y), (b.x, b.y)])
        score = 0
        for i in range(len(cells)):
            cell = cells[i]
            cell_shape = Polygon([(cell[0],cell[1]), (cell[0] + 1, cell[1]), (cell[0]+1, cell[1] + 1), (cell[0],cell[1]+1)]) 
            line = cell_shape.intersection(total_line)
            if type(line) == LineString:
                cell_obj = self.sample(cell[0], cell[1])
                h = self.normalize_weight(cell_obj.h)
                score += (line.length * h)

        return score
    
    def normalize_weight(self, score):
        return (255.0 - score) / 255.0
class Cell:
    def __init__(self, x, y, h):
        self.x = x
        self.y = y
        self.h = h
    
