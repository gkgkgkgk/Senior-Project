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
        steps = 0

        while True:
            steps += 1
            
            if len(opened) == 0:
                print("No solution found!")
                break

            opened.sort(key = lambda node: node.f)
            selected_node = opened.pop(0)
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
                return path
            
            children = selected_node.edges

            for child in children:
                # score = child.distance(self.end_node, cell_size=my_map.cell_size) + my_map.calculate_cost(selected_node, child)
                h, g = my_map.calculate_cost(selected_node, child, self.end_node)
                score = h + g
                if child in closed:
                    continue

                if (child not in opened) or child.f > score:
                    child.f = score
                    h, g = my_map.calculate_cost(selected_node, child, self.end_node)
                    child.g = g
                    child.parent = selected_node
                    if child not in opened:
                        opened.append(child)
