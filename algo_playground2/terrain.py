import numpy as np
import pygame
from colour import Color
from noise import snoise2
from shapely.geometry import Polygon, LineString

class Terrain:
    def __init__(self, resolution, freq, octaves):
        self.cells = []
        for x in range(resolution):
            for y in range(resolution):
                self.cells.append(Cell(x, y, int(snoise2(x / freq, y / freq, octaves) * 127.0 + 128.0)))
        self.resolution = resolution
        w, _ = pygame.display.get_surface().get_size()
        self.p = w / self.resolution 

    def sample(self, x, y):
        return self.cells[x][y]

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
    
    def calculate_line_cost(self, a, b, screen, draw=False):
        cells = []
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
        
        if draw:
            for coord in cells:
                pygame.draw.circle(screen, (200, 0,200), (coord[0] * self.p+ self.p/2, coord[1] * self.p+ self.p/2), 5)
            pygame.draw.circle(screen, (255, 0,255), (a.x * self.p, a.y * self.p), 10)
            pygame.draw.circle(screen, (255, 0,255), (b.x * self.p, b.y * self.p), 10)
            pygame.draw.line(screen, (0, 0, 255), (a.x* self.p, a.y* self.p), (b.x* self.p, b.y* self.p), width = 3)

        m = (b.y - a.y) / (b.x - a.x)
        # last_x = (cells[0][0], cells[0][1])
        # last_y = (cells[0][0], cells[0][1])
        # start_point = (cells[0][0], cells[0][1])
        # distance = np.sqrt((cells[0][0]* self.p - cells[-1][0]* self.p) ** 2 + (cells[0][1]* self.p - cells[-1][1]* self.p) ** 2)
        # total_dist = 0
        start_point = (cells[0][0], cells[0][1])
        distances = []
        print(cells)
        entrance_point = (cells[0][0] * self.p, cells[0][1] * self.p)
        total_line = LineString([(a.x, a.y), (b.x, b.y)])
        score = 0
        for i in range(len(cells)):
            cell = cells[i]
            cell_shape = Polygon([(cell[0],cell[1]), (cell[0] + 1, cell[1]), (cell[0]+1, cell[1] + 1), (cell[0],cell[1]+1)]) 
            line = cell_shape.intersection(total_line)
            print(line.length)
            score += line.length * cell.h
        
            # pygame.draw.circle(screen, (120, 255, 120), , 5)
            # pygame.draw.circle(screen, (120, 255, 120), (line.coords[2] * self.p, line.coords[3] * self.p), 5)
            # exit_point = None
            # y = np.sign(b.x - a.x) * m *(np.abs(cells[0][0] - cell[0])) + a.y
            # x = np.sign(b.y - a.y) * (1/m) *(np.abs(cells[0][1] - cell[1])) + a.x

            # i1 = (cell[0], y) # intersection at bottom or top
            # i2 = (x, cell[1]) # intersection at right or left

            # print(i1, i2)
            # if i2[0] >= cell[1] and i2[1] <= cell[1]:
            #     exit_point = i2
            # if i1[0] >= cell[0] and i1[0] <= cell[0]:
            #     exit_point = i1
            
            # distances.append(np.sqrt((exit_point[0] - entrance_point[0]) ** 2 + (exit_point[1] - entrance_point[1]) ** 2))
            # entrance_point = exit_point


            # print(i1, i2)
            # curr_distance = 0
            # if i1 != last_x:
            #     last_x = i1
            #     curr_distance = np.sqrt((start_point[0] - i1[0]) ** 2 + (start_point[1] - i1[1]) ** 2)
            #     start_point = i1
            # if i2 != last_y:
            #     last_y = i2
            #     curr_distance = np.sqrt((start_point[0] - i2[0]) ** 2 + (start_point[1] - i2[1]) ** 2)
            #     start_point = i2
            
            # total_dist += curr_distance


            # pygame.draw.circle(screen, (120, 255, 120), (entrance_point[0] * self.p, entrance_point[1] * self.p), 5)
            # pygame.draw.circle(screen, (255, 255, 0), (exit_point[0] * self.p, exit_point[1] * self.p), 3)
            # print(cell)
            # i1 = (cell[0]* self.p, y* self.p)
            # i2 = (x* self.p, cell[1]* self.p)
            # print(i1, i2)
            # distance = np.sqrt((i2[0] - i1[0]) ** 2 + (i2[1] - i1[1]) ** 2)
            # print(distance)
            
            # if draw:
            #     pygame.draw.circle(screen, (255, 0,0), i1, 5)
            #     pygame.draw.circle(screen, (0, 255, 0), i2, 5)

        return 0

class Cell:
    def __init__(self, x, y, h):
        self.x = x
        self.y = y
        self.h = h