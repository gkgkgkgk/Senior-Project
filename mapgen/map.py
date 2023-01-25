import numpy as np
from noise import Noise
from shapely.geometry import Polygon, LineString

# This class is responsible for creating a map. This is the map that will be generated based on pointcloud data.
# Units are all measured in FEET. Therefore, when the cell size is set to 1, it is a 1ft by 1ft space.
class Map:
    # Every map is initiated with a point (0,0) which is where the robot starts (the LiDAR begins at the center of the map).
    def __init__(self, cells=[], obstacles=[], config=[]):
        self.cells = cells
        self.addCell(0,0,0)
        self.obstacles = obstacles
        self.config = config
        self.cell_size = 1

    # A function that returns the cell object given x and y coordinates.
    def sampleCell(self, x, y):
        for cell in self.cells:
            if int(x) == cell.x and int(y) == cell.y:
                return cell
        return None
    
    # A function to add a cell at a point. If te cell exists, it will overrride the cell.
    def addCell(self, x, y, weight):
        cell = self.sampleCell(x, y)
        if cell != None:
            cell.raw_weight = weight
        else:
            cell = Cell(x, y, weight)
            self.cells.append(cell)
        
        return cell
    
    # A function to set cell values. If the cell doesn't exist, it will create it.
    # There is also an additive option, which allows the user to add to the weight instead of overriding it.
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
    
    # Simple function to add an obstacle.
    def addObstacle(self, x, y):
        obstacle = Obstacle(x, y)
        self.obstacles.append(obstacle)
        return obstacle

    # Function that makes all weights between -1 and 1
    def normalize_weights(self):
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

    # This function uses a noise function to generate a random map.
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
                    weight = (self.noise) * 20
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
    
    # This function calculates the cost from point a to b.
    def calculate_cost(self, a, b):
        score = 0
        cells = []
        x1, y1, x2, y2 = a.x, a.y, b.x, b.y
        
        dx = abs(x2 - x1)
        dy = abs(y2 - y1)
        x, y = x1, y1
        sx = -1 if x1 > x2 else 1
        sy = -1 if y1 > y2 else 1
        if dx > dy:
            err = dx / 2.0
            while x != x2:
                cells.append((x, y))
                err -= dy
                if err < 0:
                    y += sy
                    err += dx
                x += sx
        else:
            err = dy / 2.0
            while y != y2:
                cells.append((x, y))
                err -= dx
                if err < 0:
                    x += sx
                    err += dy
                y += sy
        cells.append((x, y))
            

        print("Cells:", cells)
        score += self.speed_incline_cost(cells)
        return score

    # TODO: Implement
    def speed_incline_cost(self, cells_lengths):
        # using the distance per cell and the speed per incline, calculate the total time to traverse this path.
        # this assumes a linear change in height between cells, where the LiDAR measurement sits at the center of the cell.
        score = 0
        speed_vs_incline = self.config.speed_vs_incline

        for i in range(0, len(cells_lengths) - 1):
            cell1 = self.sampleCell(cells_lengths[i][0], cells_lengths[i][1])
            cell2 = self.sampleCell(cells_lengths[i+1][0], cells_lengths[i+1][1])

            incline = np.degrees(np.arctan((cell2.raw_weight - cell1.raw_weight) / self.cell_size * np.sqrt(2)))
            speeds = []
            print("Incline: ", incline)
            if incline <= 0:
                speeds.append(speed_vs_incline[0][1])
            else:
                incline_range = []
                for s in range(len(speed_vs_incline)):
                    # the incline ranges look like this: [(0, 3), (45, 1.5), (75, 0.5)]
                    if incline < speed_vs_incline[s][0]:
                        incline_range.append(speed_vs_incline[s-1])
                        incline_range.append(speed_vs_incline[s])
                
                print(incline_range)
                speeds.append(incline_range[0][1] + (incline - incline_range[0][0]) * (incline_range[1][1] - incline_range[0][1]) / (incline_range[1][0] - incline_range[0][0]))

        score = len(cells_lengths) / np.mean(speeds)
        print(score)
        return score

    # TODO: Implement
    def energy_incline_cost(self, cells_lengths):
        # using the distance per cell and the incline to determine the energy expended by the robot
        score = 0
        incline = self.config.speed_vs_incline

        for i in range(1, len(cells_lengths)):
            cell = cells_lengths

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
    
    def normalize_weight(self, score):
        return (255.0 - score) / 255.0
    

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