import numpy as np
from noise import Noise
from cell_intersect import get_intersect_cells
import time
import math

# This class is responsible for creating a map. This is the map that will be generated based on pointcloud data.
# Units are all measured in FEET. Therefore, when the cell size is set to 1, it is a 1ft by 1ft space.
class Map:
    # Every map is initiated with a point (0,0) which is where the robot starts (the LiDAR begins at the center of the map).
    def __init__(self, cells=[], obstacles=[], config=[], cell_size = 0.075):
        self.cells = []
        self.cells_map = {}

        for cell in cells:
            self.addCell(cell['x'], cell['y'], cell['raw_weight'])

        self.addCell(0,0,0)
        self.obstacles = obstacles
        self.config = config
        self.cell_size = cell_size
        self.min = 0
        self.max = 0
        self.longest_edge = 0
        self.diagonal = 0
        self.setDiagonal()

    def setDiagonal(self):
        self.diagonal = np.sqrt(2) * np.sqrt(len(self.cells))
        
    # A function that returns the cell object given x and y coordinates.
    def sampleCell(self, x, y):
        if str(x)+","+str(y) in self.cells_map:
            return self.cells_map[str(x)+","+str(y)]

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
    def generate_random_map(self, size, freq, octaves, seed=None, rocks=False, rockAmount=5, amplitude=1):
        self.cells = []
        self.cells_map = {}

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
                    self.noise = noise.get_noise(x, y, freq, octaves=octaves) * amplitude
                    weight = (self.noise)
                    normal = np.random.uniform(-1,1,3).tolist()
                    self.addCell(x, y, weight, normal)
        
        self.addCell(0, 0, 0, [0, 0, 0])

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
        
        self.setDiagonal();

    # This function calculates the cost from point a to b. d is destination 

    def calculate_cost(self, a, b, d, o, speed_weight = 0, energy_weight = 0, safety_weight = 0, cost_array=False, distance_based=False):
        cells_lengths = get_intersect_cells([a.x, a.y], [b.x, b.y], plot = False)
        
        if distance_based: # this case runs for testing standard astar
            # limit_cost = self.limitation_cost(cells, check_clearence = True)
            h = np.sqrt((d.x - b.x) ** 2 + (d.y - b.y) ** 2)
            g = np.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
            return h, g

        cells = []
        for i in range(0, len(cells_lengths)):
            cells.append((self.sampleCell(cells_lengths[i][0], cells_lengths[i][1]), cells_lengths[i][2]))

        heuristic = 0
        cost_speed, raw_cost_speed = 0, 0
        if speed_weight != 0 or cost_array:
            cost_speed, raw_cost_speed = self.speed_cost(cells)

        cost_energy, raw_cost_energy = 0, 0
        if energy_weight != 0 or cost_array:
            cost_energy, raw_cost_energy = self.energy_cost(cells)

        if energy_weight != 0 or speed_weight != 0:
            heuristic =  self.heuristic(b, d)

        cost_safety, clearance_score = 0, True
        if safety_weight != 0 or cost_array:
            cost_safety, clearance_score = self.safety_cost(cells, o)


        heuristic = heuristic * speed_weight + heuristic * energy_weight
        cost = cost_speed * speed_weight + cost_energy * energy_weight + cost_safety * safety_weight
        limit_calc = self.limitation_cost(cells, check_clearence = False if safety_weight > 0 else True)

        limit_cost = 0
        if limit_calc > 0 or not clearance_score:
            limit_cost = 10000
        
        
        if not cost_array:
            return heuristic, cost + limit_cost

        distance = g = np.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
        cost_array = {}
        cost_array['speed'] = cost_speed
        cost_array['speed_raw'] = raw_cost_speed
        cost_array['energy'] = cost_energy
        cost_array['energy_raw'] = raw_cost_energy
        cost_array['safety'] = cost_safety
        cost_array['limit'] = limit_cost
        cost_array['distance'] = distance

        return cost_array

    def heuristic(self, a, b):
        h = np.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)

        # Fixed: the denominator should actually be the longest potential distance between start and end.
        # h /= np.sqrt((self.end_node.x - self.start_node.x) ** 2 + (self.end_node.y - self.start_node.y) ** 2)
        h /= self.diagonal
        return h

    def speed_cost(self, cells):
        # using the distance per cell and the speed per incline, calculate the total time to traverse this path.
        # this assumes a linear change in height between cells, where the LiDAR measurement sits at the center of the cell.

        distance = 0
        # print("NEW EDGE:")
        for i in range(len(cells) - 1):
            cell1 = cells[i][0]
            cell2 = cells[i + 1][0]
            h = np.abs(cell1.raw_weight - cell2.raw_weight)
            l = cells[i][1]
            distance += np.sqrt(h ** 2 + l ** 2)
        
        distance += cells[len(cells)-1][1]
        # print("END EDGE:", distance)

        # For the normalization, the assumption we make is that the max length of an edge is the theoretical length of an edge from the start point to the end point.
        # Assuming the user has an appropriate PRM, they will never have an edge that long, and it is an appropriate upper bound.
        d = self.longest_edge/np.cos(np.radians(self.config.max_incline_up))
        return distance/d, distance


    # using the distance per cell and the incline to determine the energy expended by the robot
    def energy_cost(self, cells):
        energies = []

        # ASSUMPTION: robot will not calculate energy_vs_incline if barely going through cell, as the robot is probably about the same size of the cell anyway.
        for i in range(len(cells) - 1):
            cell1 = cells[i][0]
            cell2 = cells[i + 1][0]
            incline_cost = 0

            if(cells[i][1] > np.sqrt(2)/4):
                incline_cost = self.config.energy_vs_incline(cell2.raw_weight - cell1.raw_weight, cell1.distance(cell2, self.cell_size))
            
            h = np.abs(cell1.raw_weight - cell2.raw_weight)
            l = cells[i][1]
            distance = np.sqrt(h ** 2 + l ** 2)
            
            energy = self.cell_size * distance * self.config.min_energy_per_unit + incline_cost
            energies.append(energy)
            # if energy < 50:
            # print("(",cell1.x, cell1.y, cell2.x, cell2.y, ")", "segment", energy, self.config.energy_vs_incline(cell2.raw_weight - cell1.raw_weight, cell1.distance(cell2, self.cell_size)), cell2.raw_weight - cell1.raw_weight)
        
        energies.append(self.cell_size * cells[len(cells)-1][1]* self.config.min_energy_per_unit)
        e = np.sum(energies)

        # print("EDGE:", cells[0].x, cells[0].y, cells[len(cells)-1].x, cells[len(cells)-1].y)
        # for i in range(len(cells) - 1):
        #     cell1 = cells[i]
        #     cell2 = cells[i + 1]
        #     print(i, e, self.config.energy_vs_incline(cell2.raw_weight - cell1.raw_weight, cell1.distance(cell2, self.cell_size)), cell2.raw_weight - cell1.raw_weight)

        d =  self.cell_size * self.config.min_energy_per_unit * (self.longest_edge/np.cos(np.radians(self.config.max_incline_up))) + self.config.max_energy_vs_incline()
        return e / d, e
    
    def safety_cost(self, cells, o):
        cell_heights = []
        cell_norms = []

    
        for i in range(0, len(cells)):
            temp_cell = cells[i][0]
            cell_heights.append(temp_cell.raw_weight)
            if(temp_cell.normal != None):
                cell_norms.append(temp_cell.normal)

        # step safety is between 0 and ~1, depending on how close the height is to the maximum step height.s
        step_safety = 0

        for i in range(len(cells) - 1):
            cell1 = cells[i][0]
            cell2 = cells[i + 1][0]

            dh = cell2.raw_weight - cell1.raw_weight
            max_val = self.config.max_step_height_up if dh > 0 else self.config.max_step_height_down
            s = ((2 ** ((np.abs(dh)/max_val))) - 1)
            
            if s > step_safety:
                step_safety = s
        
        # turn radius is between 0 and 1, depending on how close the turn radius is to a full 180 degrees
        turn_radius = 0
        if o != None:
            turn_radius = self.angle_between_points([o.x, o.y], [cells[0][0].x, cells[0][0].y], [cells[len(cells)-1][0].x, cells[len(cells)-1][0].y])
            turn_radius = 1-math.exp(-turn_radius/30)

         
        # calculate height variance of cells surrounding the cells the edge passes through

        # for c in range(len(cells)):
        #     for i in range(-1,2):
        #         for j in range(-1,2):
        #             if(i != 0 and j != 0):
        #                 temp_cell = self.sampleCell(cells[c].x + i, cells[c].y + j)
        #                 #if((cells[c].x + i >= self.min) and (cells[c].x + i <= self.max) and (cells[c].y + j >= self.min) and (cells[c].y + j <= self.max)):
        #                 if(temp_cell != None):
        #                     if(temp_cell not in cells):
        #                         cells.append(temp_cell)
        #                         variance_cell_vals.append(temp_cell.raw_weight)

        clearance = True
        length = int((self.config.width / self.cell_size) / 2)
        if length == 0:
            length = 1

        var_cells = []
        for cell in cells:
            cell = cell[0]
            var_cells.append(cell)
            for x in range(cell.x - length, cell.x + length + 1):
                for y in range(cell.y - length, cell.y + length + 1):
                    if cell.x != x and cell.y != y:
                        temp_cell = self.sampleCell(x, y)

                        # Clearance Check
                        if temp_cell != None and (temp_cell.raw_weight - cell.raw_weight > self.config.max_step_height_up or cell.raw_weight - temp_cell.raw_weight > self.config.max_step_height_down):
                            clearance = False
                        
                        # Variance Check
                        if((temp_cell != None) and (temp_cell not in var_cells)):
                            var_cells.append(temp_cell)
                            cell_heights.append(temp_cell.raw_weight)
############

        # length = int((self.config.width / self.cell_size) / 2)
        # if length == 0:
        #     length = 1

        # var_cells = []
        # for c in range(len(cells)):
        #     var_cells.append(cells[c][0])
        #     for i in range(-length, length+1):
        #         for j in range(-length, length+1): 
        #             if(i != 0 and j != 0):
        #                 temp_cell = self.sampleCell(cells[c][0].x + i, cells[c][0].y + j)
        #                 #if((cells[c].x + i >= self.min) and (cells[c].x + i <= self.max) and (cells[c].y + j >= self.min) and (cells[c].y + j <= self.max)):
        #                 if((temp_cell != None) and (temp_cell not in var_cells)):
        #                     var_cells.append(temp_cell)
        #                     cell_heights.append(temp_cell.raw_weight)

        height_variance = 10*np.var(cell_heights)

        # calculate variance of normals
        norm_variance = np.sum(np.var(cell_norms, axis = 0)) if cell_norms else 0

        return (turn_radius + step_safety + norm_variance + height_variance)/4, clearance
    
    def angle_between_points(self, a, b, c):
        ba = np.array(b) - np.array(a)
        bc = np.array(c) - np.array(b)

        cosine_angle = np.dot(ba, bc) / (np.linalg.norm(ba) * np.linalg.norm(bc))
        cosine_angle = cosine_angle if cosine_angle < 1 else 1
        angle = np.arccos(cosine_angle)

        return np.degrees(angle)

    def limitation_cost(self, cells, check_clearence=False):
        max_incline = False
        max_step_up =  False
        max_step_down =  False

        for i in range(len(cells) - 1):
            cell1 = cells[i][0]
            cell2 = cells[i + 1][0]
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

    def check_clearence(self, cells):
        length = int((self.config.width / self.cell_size) / 2)
        if length == 0:
            length = 1

        for cell in cells:
            cell = cell[0]
            for x in range(cell.x - length, cell.x + length + 1):
                for y in range(cell.y - length, cell.y + length + 1):
                    c = self.sampleCell(x, y)
                    if c != None and (c.raw_weight - cell.raw_weight > self.config.max_step_height_up or cell.raw_weight - c.raw_weight > self.config.max_step_height_down):
                        return False
        return True

    def normalize_weight(self, score):
        return (255.0 - score) / 255.0
    

# TODO: implement normals, variance, etc.
class Cell:
    def __init__(self, x, y, weight, normal = None):
        self.x = x
        self.y = y
        self.normalized_weight = weight
        self.raw_weight = weight
        self.max_height = 0
        self.min_height = 0
        self.normal = normal
    
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