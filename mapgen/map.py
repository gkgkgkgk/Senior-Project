import numpy as np
from noise import snoise3, snoise2

class Map:
    def __init__(self, cells=[], obstacles=[]):
        self.cells = cells
        self.addCell(0,0,0)
        self.obstacles = obstacles

    def sampleCell(self, x, y):
        for cell in self.cells:
            if int(x) == cell.x and int(y) == cell.y:
                return cell
        return None
    
    def addCell(self, x, y, weight):
        cell = Cell(x, y, weight)
        self.cells.append(cell)
        return cell

    def normalize_weights(self): # makes all weights between -1 and 1
        min_weight = min((cell.raw_weight for cell in self.cells))
        max_weight = max((cell.raw_weight for cell in self.cells))
        max_val = abs(min_weight)

        if max_weight > max_val:
            max_val = max_weight


        for cell in self.cells:
            if cell.raw_weight < 0:
                cell.weight = (cell.raw_weight)/(max_val)
            else:
                cell.weight = (cell.raw_weight)/(max_weight)
        
    
    def generate_random_map(self, size, freq, octaves, random=False, rocks=False, rockAmount=5):
        for x in range(int(-size/2), int(size/2)):
            for y in range(int(-size/2), int(size/2)):
                if not (x == 0 and y == 0):
                    if random:
                        z = np.random.uniform(0, size)
                        self.noise = snoise3(x / freq, y / freq, z / freq, octaves=octaves)
                    else:
                        self.noise = snoise2(x / freq, y / freq, octaves)

                    weight = (self.noise * 5)
                    self.addCell(x, y, weight)
        
        if rocks:
            for _ in range(rockAmount):
                o = Obstacle()
                o.random(x=int(np.random.uniform(-size/2, size/2)), y=int(np.random.uniform(-size/2, size/2)))
                self.obstacles.append(o)

                for obstacle in self.obstacles:
                    for cell in obstacle.cells:
                        c = self.sampleCell(cell.x, cell.y)
                        if c != None:
                            c.raw_weight += cell.raw_weight

class Cell:
    def __init__(self, x, y, weight):
        self.x = x
        self.y = y
        self.weight = weight
        self.raw_weight = weight
    
    def __repr__(self):
        return "(" + str(self.x) + ", " + str(self.y) + "), " + str(self.weight)

class Obstacle:
    def __init__(self, cells=[]):
        self.cells = cells
    
    def random(self, x=0, y=0, weight=0.75, max_size=5):
        for x_pos in range(x, x+max_size):
            for y_pos in range(y, y+max_size):
                self.cells.append(Cell(x_pos, y_pos, weight))