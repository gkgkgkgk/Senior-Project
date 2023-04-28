import numpy as np

class Astar:
    def __init__(self, start_node, end_node, speed=0.0, safety=0.0, energy=0.0):
        self.start_node = start_node
        self.end_node = end_node
        self.path = []
        self.path_cost = 0
        self.speed = speed
        self.energy = energy
        self.safety = safety
        self.path_costs = {}
        self.path_costs["speed"] = 0
        self.path_costs["speed_raw"] = 0
        self.path_costs["energy"] = 0
        self.path_costs["energy_raw"] = 0
        self.path_costs["safety"] = 0
        self.path_costs["limit"] = 0
        self.path_costs["distance"] = 0
        self.path_costs["limitation"] = 0

    def find_path(self, my_map, vanilla=False):
        my_map.start_node = self.start_node
        my_map.end_node = self.end_node

        opened = []
        closed = []

        opened.append(self.start_node)
        selected_node = self.start_node
        steps = 0

        while True:
            steps += 1
            
            if len(opened) == 0:
                print("No solution found!")
                break

            min_f = float("inf")

            for node in opened:
                if node.f < min_f:
                    min_f = node.f
                    selected_node = node

            opened.remove(selected_node)
            closed.append(selected_node)

            if selected_node.x == self.end_node.x and selected_node.y == self.end_node.y:
                totalCost = 0
                reversePath = []
                reversePath.append(selected_node)
                node = selected_node
                while node != self.start_node:
                    reversePath.append(node.parent)
                    node = node.parent
                    totalCost += node.g
                path = np.flip(reversePath)

                self.path = path
                self.path_cost = totalCost
                
                for i in range(len(path)-1):
                    cost_array = my_map.calculate_cost(path[i], path[i+1], self.end_node, path[i].parent if path[i].parent != 0 else None, cost_array=True, speed_weight=self.speed, safety_weight=self.safety, energy_weight=self.energy)
                    self.path_costs["speed"] += cost_array["speed"]
                    self.path_costs["speed_raw"] += cost_array["speed_raw"]
                    self.path_costs["energy"] += cost_array["energy"]
                    self.path_costs["energy_raw"] += cost_array["energy_raw"]
                    self.path_costs["safety"] += cost_array["safety"]
                    self.path_costs["limit"] += cost_array["limit"]
                    self.path_costs["distance"] += cost_array["distance"]
                    self.path_costs["limitation"] += cost_array["limitation"]


                return path, self.path_costs
            
            children = selected_node.edges

            for child in children:

                if child in closed: # child should never be in closed if it could be reached at a lower cost
                    continue
                
                if not vanilla:
                    h, g = my_map.calculate_cost(selected_node, child, self.end_node, selected_node.parent if selected_node.parent != 0 else None, speed_weight=self.speed, safety_weight=self.safety, energy_weight=self.energy)
                else:
                    h, g = my_map.calculate_cost(selected_node, child, self.end_node, selected_node.parent if selected_node.parent != 0 else None, distance_based=True)

                temp_g = selected_node.g + g
                
                if temp_g + h > child.f:
                    continue

                child.g = temp_g
                child.h = h
                child.f = temp_g + child.h
                child.parent = selected_node

                if child not in opened:
                    opened.append(child)

