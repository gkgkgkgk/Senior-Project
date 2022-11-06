import numpy as np

def astar(start_node, end_node):
    opened = []
    closed = []

    opened.append(start_node)
    steps = 0

    while True:
        steps += 1
        
        if len(opened) == 0:
            print("No solution found!")
            break

        opened.sort(key = lambda node: node.f)
        selected_node = opened.pop(0)
        closed.append(selected_node)

        if selected_node == end_node:
            totalCost = 0
            reversePath = []
            reversePath.append(selected_node)
            node = selected_node
            while node != start_node:
                reversePath.append(node.parent)
                node = node.parent
                totalCost += node.f
            path = np.flip(reversePath)
            print("Total Cost: " + str(totalCost) + ", Amount of Nodes: " +str(len(path)))
            pct_err = ((totalCost / len(path)) - np.sqrt(2 * 600 * 2) ) / np.sqrt(2 * 600 * 2)
            print("Percent Error from Direct Path: " + str(pct_err))
            return path
        
        children = selected_node.edges

        for child in children:
            child.f = child.distance(end_node) + child.g
            if ((child not in opened) and (child not in closed)):
                child.parent = selected_node
                opened.append(child)
            elif (child in opened) and child.parent != selected_node:
                if child.f < opened[opened==child].f:
                    child.parent = selected_node
                    opened.append(child)

