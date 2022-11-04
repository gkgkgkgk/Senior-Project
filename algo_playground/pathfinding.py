def astar(start_node):
    open_nodes = []
    closed_nodes = []
    open_nodes.append(start_node)

    while len(open_nodes) > 0:
        current_node = open_list[0]

        # for i, node in enumerate(open_nodes):
        #     if node.