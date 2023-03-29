import numpy as np
from noise import Noise
from shapely.geometry import Polygon, LineString
from cell_intersect import get_intersect_cells
import time
# This class is responsible for creating a map. This is the map that will be generated based on pointcloud data.
# Units are all measured in FEET. Therefore, when the cell size is set to 1, it is a 1ft by 1ft space.
class Map:
    # Every map is initiated with a point (0,0) which is where the robot starts (the LiDAR begins at the center of the map).
    def __init__(self, cells=[], obstacles=[], config=[]):
        self.cells = cells
        self.cells_map = {}
        self.addCell(0,0,0)
        self.obstacles = obstacles
        self.config = config
        self.cell_size = 0.075
        self.min = 0
        self.max = 0

    # A function that returns the cell object given x and y coordinates.
    def sampleCell(self, x, y):
        if str(x)+","+str(y) in self.cells_map:
            return self.cells_map[str(x)+","+str(y)]

        return None
        for cell in self.cells:
            if int(x) == cell.x and int(y) == cell.y:
                return cell
        return None
    
    # A function to add a cell at a point. If te cell exists, it will overrride the cell.
    def addCell(self, x, y, weight, normal = None):
        cell = self.sampleCell(x, y)
        if cell != None:
            cell.raw_weight = weight
            cell.normal = normal
        else:
            cell = Cell(x, y, weight, normal)
            self.cells.append(cell)
            self.cells_map[str(x)+","+str(y)] = cell
        
        return cell
    
    # A function to set cell values. If the cell doesn't exist, it will create it.
    # There is also an additive option, which allows the user to add to the weight instead of overriding it.
    def setCell(self, x, y, weight, normal = None, additive = False):
        cell = self.sampleCell(x, y)
        if cell != None:
            if additive:
                cell.raw_weight += weight
                cell.normal = normal
            else:
                cell.raw_weight = weight
                cell.normal = normal
        else:
            cell = Cell(x, y, weight, normal)
            self.cells.append(cell)
            self.cells_map[str(x)+","+str(y)] = cell
        
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
            if cell.raw_weight < 0 and max_val != 0:
                cell.normalized_weight = (cell.raw_weight)/(max_val)
            elif max_weight != 0:
                cell.normalized_weight = (cell.raw_weight)/(max_weight)

    def generate_blank_map(self, size):
        start = int(-size/2)
        end = int(size/2)
        if size % 2 != 0:
            end += 1

        self.min = start
        self.max = end - 1

        for x in range(start, end):
            for y in range(start, end):
                self.addCell(x,y,0)

    # This function uses a noise function to generate a random map.
    def generate_random_map(self, size, freq, octaves, seed=None, rocks=False, rockAmount=5):
        start = int(-size/2)
        end = int(size/2)
        if size % 2 != 0:
            end += 1

        self.min = start
        self.max = end - 1

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


    # This function calculates the cost from point a to b. d is destination 

    def calculate_cost(self, a, b, d, o, speed_weight = 1, energy_weight = 0, safety_weight = 0):
        cells = get_intersect_cells([a.x, a.y], [b.x, b.y], plot = False)

        cost_speed = self.speed_cost(cells)
        heuristic_speed =  self.speed_heuristic(b, d)

        cost_energy = self.energy_cost(cells)
        heuristic_energy = self.energy_heuristic(b, d)

        cost_safety = self.safety_cost(cells, o)
        heuristic_safety = self.safety_heuristic(b, d)

        heuristic = heuristic_speed * speed_weight + heuristic_energy * energy_weight + heuristic_safety * safety_weight
        cost = cost_speed * speed_weight + cost_energy * energy_weight + cost_safety * safety_weight

        return heuristic, cost + self.limitation_cost(cells, check_clearence = True)

    def speed_heuristic(self, a, b):
        return np.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2) * self.cell_size / self.config.max_speed

    def speed_cost(self, cells_lengths):
        # using the distance per cell and the speed per incline, calculate the total time to traverse this path.
        # this assumes a linear change in height between cells, where the LiDAR measurement sits at the center of the cell.
        cells = []
        for i in range(0, len(cells_lengths)):
            cells.append(self.sampleCell(cells_lengths[i][0], cells_lengths[i][1])) 

        score = 0
        distance = 0
        for i in range(len(cells) - 1):
            cell1 = cells[i]
            cell2 = cells[i + 1]
            h = np.abs(cell1.raw_weight - cell2.raw_weight)
            l = cells_lengths[i][2]
            distance += np.sqrt(h ** 2 + l ** 2)
        return distance / self.config.max_speed

    def energy_heuristic(self, a, b):
        return np.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2) * self.cell_size * self.config.min_energy_per_unit

    # using the distance per cell and the incline to determine the energy expended by the robot
    def energy_cost(self, cells_lengths):
        cells = []
        for i in range(0, len(cells_lengths)):
            cells.append(self.sampleCell(cells_lengths[i][0], cells_lengths[i][1]))         
        energies = []

        for i in range(len(cells) - 1):
            cell1 = cells[i]
            cell2 = cells[i + 1]
            energy = self.cell_size * self.config.min_energy_per_unit + self.config.energy_vs_incline(cell2.raw_weight - cell1.raw_weight, cell1.distance(cell2, self.cell_size))
            energies.append(energy)

        return np.sum(energies)
    
    def safety_heuristic(self, a, b):
        return np.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2) * self.cell_size
    
    def safety_cost(self, cells_lengths, o):
        cells = []
        variance_cell_vals = []
        cell_norms = []

        for i in range(0, len(cells_lengths)):
            temp_cell = self.sampleCell(cells_lengths[i][0], cells_lengths[i][1])
            cells.append(temp_cell)
            variance_cell_vals.append(temp_cell.raw_weight)
            if(temp_cell.normal != None):
                cell_norms.append(temp_cell.normal)

        # step safety is between 0 and 1, depending on how close the height is to the maximum step height.s
        step_safety = 0

        for i in range(len(cells) - 1):
            cell1 = cells[i]
            cell2 = cells[i + 1]

            dh = cell2.raw_weight - cell1.raw_weight
            max_val = self.config.max_step_height_up if dh > 0 else self.config.max_step_height_down
            s = ((2 ** ((np.abs(dh)/max_val))) - 1)
            
            if s > step_safety:
                step_safety = s
        
        # turn radius is between 0 and 1, depending on how close the turn radius is to a full 180
        turn_radius = 0
        if o != None:
            turn_radius = self.angle_between_points([o.x, o.y], [cells[0].x, cells[0].y], [cells[len(cells)-1].x, cells[len(cells)-1].y])
            turn_radius = abs(turn_radius) / 180

        # TODO: MAKE FASTER WITH MATRIX DIALATION 
        # calculate variance based on cells that surround the cells along the path
        for c in range(len(cells)):
            for i in range(-1,2):
                for j in range(-1,2):
                    if(i != 0 and j != 0):
                        temp_cell = self.sampleCell(cells[c].x + i, cells[c].y + j)
                        #if((cells[c].x + i >= self.min) and (cells[c].x + i <= self.max) and (cells[c].y + j >= self.min) and (cells[c].y + j <= self.max)):
                        if(temp_cell != None):
                            if(temp_cell not in cells):
                                cells.append(temp_cell)
                                variance_cell_vals.append(temp_cell.raw_weight)

        height_variance = 10*np.var(variance_cell_vals)
        
        # calculate variance of normals
        norm_variance = np.sum(np.var(cell_norms, axis = 0))

        # print("----------------------------")
        # print("step: " + str(step_safety))
        # print("turn: " + str(turn_radius))
        # print("var: " + str(total_var))
        return (turn_radius + step_safety + height_variance + norm_variance)/4
    
    def angle_between_points(self, a, b, c):
        ba = np.array(b) - np.array(a)
        bc = np.array(c) - np.array(b)

        cosine_angle = np.dot(ba, bc) / (np.linalg.norm(ba) * np.linalg.norm(bc))
        angle = np.arccos(cosine_angle)

        return np.degrees(angle)

    def limitation_cost(self, cells_lengths, check_clearence=False):
        cells = []
        for i in range(0, len(cells_lengths)):
            cells.append(self.sampleCell(cells_lengths[i][0], cells_lengths[i][1])) 

        max_incline = False
        max_step_up =  False
        max_step_down =  False

        for i in range(len(cells) - 1):
            cell1 = cells[i]
            cell2 = cells[i + 1]
            incline = np.degrees(np.arctan((cell2.raw_weight - cell1.raw_weight) / self.cell_size * np.sqrt(2)))

            if cell2.raw_weight > cell1.raw_weight and abs(cell2.raw_weight - cell1.raw_weight) > self.config.max_step_height_up:
                max_step_up = True
            elif cell1.raw_weight > cell2.raw_weight and abs(cell1.raw_weight - cell2.raw_weight) > self.config.max_step_height_down:
                max_step_down = True
            elif incline > self.config.max_incline_up:
                max_incline = True

        clearence = True

        if check_clearence:
            clearence = self.check_clearence(cells)
        if max_step_up or max_step_down or max_incline or not clearence:
            return 10000
        
        return 0

    # TODO: IMPLEMENT THIS USING TRANSLATION AND SINGLE CALCULATION
    # either we can use a big rectanlge bounding box and check every square and its distance to the line, or we can use a rotated rectangle and check every box.
    def check_clearence(self, cells):
        start = cells[0]
        end = cells[len(cells)-1]
        # slope = (end.y - start.y) / (end.x - start.x)
        # inv_slope = -1/slope
        for i in range(len(cells)-1):
            get_intersect_cells([cells[i].x, cells[i].y], [end.x, end.y], plot = False)

        # for j in range(-offset/2, offset/2):
        #     offset = self.config.width / self.cell_size

        #     if offset % 2 == 0:
        #         offset += 1
        #     else:
        #         offset += 2
            
            #for i in range(cells):
        length = int((self.config.width / self.cell_size) / 2)
        if length == 0:
            length = 1

        for cell in cells:
            for x in range(cell.x - length, cell.x + length + 1):
                for y in range(cell.y - length, cell.y + length + 1):
                    c = self.sampleCell(x, y)
                    if c != None and np.abs(c.raw_weight - cell.raw_weight) > self.config.max_step_height_up:
                        return False
        # for cell in cells:
        #     x1 = cell.x - length
        #     x2 = cell.x + length

        #     y1 = cell.y - length
        #     y2 = cell.y + length


        #     for x in range(x1, x2 + 1):
        #         for y in range(y1, y2 + 1):
        #             c = self.sampleCell(x, y)
        #             if c != None and c.distance(cell, self.cell_size) < (self.config.width / 2) and np.abs(c.raw_weight - cell.raw_weight) > self.config.max_step_height_up:
        #                 return False

        return True

    def normalize_weight(self, score):
        return (255.0 - score) / 255.0
    

# TODO: implement normals, variance, etc.
class Cell:
    def __init__(self, x, y, weight):
        self.x = x
        self.y = y
        self.normalized_weight = weight
        self.raw_weight = weight
        self.max_height = 0
        self.min_height = 0
        self.normal = None
    
    def __repr__(self):
        return "{(" + str(self.x) + ", " + str(self.y) + "), " + str(self.raw_weight) + "}"
    def distance(self, node, cell_size):
        return np.sqrt(np.square(node.x - self.x) + (np.square(node.y - self.y))) * cell_size
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