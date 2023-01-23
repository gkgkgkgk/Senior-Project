import numpy as np
from noise import Noise
from shapely.geometry import Polygon, LineString

class Map:
    def __init__(self, cells=[], obstacles=[]):
        self.cells = cells
        self.addCell(0,0,0)
        self.obstacles = obstacles
        self.grid_size = 0

    def sampleCell(self, x, y):
        for cell in self.cells:
            if int(x) == cell.x and int(y) == cell.y:
                return cell
        return None
    
    def addCell(self, x, y, weight):
        cell = self.sampleCell(x, y)
        if cell != None:
            print(cell)
            cell.raw_weight = weight
            print(cell)
        else:
            cell = Cell(x, y, weight)
            self.cells.append(cell)
        
        return cell
    
    def setCell(self, x, y, weight, additive = False):
        cell = self.sampleCell(x, y)
        if cell != None:
            if additive:
                cell.raw_weight += weight
            else:
                cell.raw_weight = weight
        else:
            cell = Cell(x, y, weight)
            self.cells.append(cell)
        
        return cell
    
    def addObstacle(self, x, y):
        obstacle = Obstacle(x, y)
        self.obstacles.append(obstacle)
        return obstacle

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

    def generate_random_map(self, size, freq, octaves, seed=None, rocks=False, rockAmount=5):
        start = int(-size/2)
        end = int(size/2)
        if size % 2 != 0:
            end += 1
        
        noise = Noise(seed)
        if seed != None:
            np.random.seed(seed)

        for x in range(start, end):
            for y in range(start, end):
                if not (x == 0 and y == 0):
                    self.noise = noise.get_noise(x, y, freq, octaves=octaves)
                    weight = (self.noise)
                    self.addCell(x, y, weight)
        
        if rocks:
            for _ in range(rockAmount):
                x = int(np.random.uniform(-size/2, size/2))
                y = int(np.random.uniform(-size/2, size/2))
                self.addObstacle(x, y)
            
            for obstacle in self.obstacles:
                for cell in obstacle.cells:
                    c = self.sampleCell(cell.x, cell.y)
                    if c != None:
                        c.raw_weight += cell.raw_weight
    
    def calculate_cost(self, a, b):
        cells = []

        if (b.x == a.x): # vertical line case
            score = 0
            for y in range(b.y, a.y):
                left = self.sampleCell(a.x - 1, y)
                right = self.sampleCell(a.x, y)
                score += (self.normalize_weight(right.raw_weight) + self.normalize_weight(left.raw_weight)) / 2
            return score
        if (b.y == a.y): # horizontal line case
            score = 0
            for x in range(b.x, a.x):
                top = self.sampleCell(x, a.y - 1)
                bottom = self.sampleCell(x, a.y)
                score += (self.normalize_weight(top.raw_weight) + self.normalize_weight(bottom.raw_weight)) / 2
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
        
        total_line = LineString([(a.x, a.y), (b.x, b.y)])
        score = 0

        cells_lengths = []
        for i in range(len(cells)):
            cell = cells[i]
            cell_shape = Polygon([(cell[0],cell[1]), (cell[0] + 1, cell[1]), (cell[0]+1, cell[1] + 1), (cell[0],cell[1]+1)]) 
            line = cell_shape.intersection(total_line)
            if type(line) == LineString:
                cell_obj = self.sampleCell(cell[0], cell[1])
                print(cell_obj)
                h = self.normalize_weight(cell_obj.raw_weight)
                score += (line.length * h)
                cells_lengths.append((cell_obj, line.length))

        score = (self.speed_cost(cells_lengths))
        return score

    def normalize_weight(self, score):
        return (255.0 - score) / 255.0

    def speed_cost(self, cells_lengths):
        score = 0
        max_step = 2
        
        for i in range(1, len(cells_lengths)):
            cell = cells_lengths[i][0]
            prev_cell = cells_lengths[i-1][0]
            if cell.raw_weight - prev_cell.raw_weight > max_step:
                score += 100 * cell.raw_weight
            else:
                score += 1
        return score
                

class Cell:
    def __init__(self, x, y, weight):
        self.x = x
        self.y = y
        self.weight = weight
        self.raw_weight = weight
    
    def __repr__(self):
        return "{(" + str(self.x) + ", " + str(self.y) + "), " + str(self.raw_weight) + "}"

class Obstacle:
    def __init__(self, x, y, cells=None):
        self.x = x
        self.y = y
        self.cells = cells

        max_size = 10
        weight = np.random.uniform(low=0.1, high=0.25)
        if self.cells == None:
            self.cells = []
            for x_pos in range(int(self.x-max_size/2), int(self.x+max_size/2) + 1):
                for y_pos in range(int(self.y-max_size/2), int(self.y+max_size/2)):
                    if np.sqrt(np.square(x_pos - self.x) + np.square(y_pos - self.y)) <= np.sqrt(max_size) + np.random.uniform(-1, 1):
                        self.cells.append(Cell(x_pos, y_pos, weight))
    
    def __repr__(self):
        return str(self.cells)        