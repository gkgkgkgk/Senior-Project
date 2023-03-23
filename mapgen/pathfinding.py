import numpy as np

class Astar:
    def __init__(self, start_node, end_node):
        self.start_node = start_node
        self.end_node = end_node
        self.path = []
        self.path_cost = 0

    def find_path(self, my_map):
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
                # pct_err = ((totalCost / len(path)) - np.sqrt(2 * 600 * 2) ) / np.sqrt(2 * 600 * 2)
                self.path = path
                self.path_cost = totalCost
                # print(path)
                # for node in path:
                #     print(node, node.g)
                return path
            
            children = selected_node.edges

            for child in children:

                if child in closed: # child should never be in closed if it could be reached at a lower cost
                    continue

                h, g = my_map.calculate_cost(selected_node, child, self.end_node, selected_node.parent if selected_node.parent != 0 else None)

                temp_g = selected_node.g + g
                
                if temp_g + h > child.f:
                    continue
                # if child in opened and temp_g > selected_node.g:
                #     continue

                child.g = temp_g
                child.h = h
                child.f = temp_g + child.h
                child.parent = selected_node

                if child not in opened:
                    opened.append(child)

