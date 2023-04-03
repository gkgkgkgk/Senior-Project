import pygame
from terrain import Terrain
from maps import PRM, Grid
from pathfinding import Astar
import time
import numpy as np
import matplotlib.pyplot as plt

pygame.init()
screen_dim = (1024, 1024)
screen = pygame.display.set_mode(screen_dim)

iterations = 10

costs_prm = []
times_prm = []
costs_grid = []
times_grid = []
prm_sizes = []

for size in range(8, 2, -1):
    prm_sizes.append(1/size)
    costs = []
    times = []
    for i in range(iterations):
        print(i)
        terrain = Terrain(64, 16, 16, random=True)
        start = time.time()
        prm = PRM((64 * 64) / (size))
        prm.generate_points(terrain)
        prm.connect_nodes_knn(5)
        astar = Astar(prm.nodes[0], prm.nodes[1])
        astar.find_path(terrain)
        if len(astar.path != 0):
            times.append(time.time() - start)
            costs.append(astar.path_cost)
    costs_prm.append(np.mean(costs))
    times_prm.append(np.mean(times))

    # start = time.time()
    # grid = Grid(1)
    # grid.generate_points(terrain)
    # astar = Astar(grid.nodes[0], grid.nodes[-1])
    # astar.find_path(terrain)
    # times_grid.append(time.time() - start)
    # costs_grid.append(astar.path_cost)

print(prm_sizes)
print(times_prm)
plt.figure(figsize=(16,8))
plt.subplot(1, 2, 1)
plt.plot(prm_sizes,times_prm)
plt.xlabel("PRM points (% of total Vertices")
plt.ylabel("Computationm Time (sec)")
plt.title("PRM Points vs Average Computational Time")
plt.subplot(1, 2, 2)
plt.plot(prm_sizes,costs_prm)
plt.xlabel("PRM points (% of total Vertices")
plt.ylabel("Average Cost")
plt.title("PRM Points vs Average Cost")
plt.savefig("./fig.png")

# print("PRM:")
# print(np.mean(costs_prm))
# print(np.mean(times_prm))
# print("GRID:")
# print(np.mean(costs_grid))
# print(np.mean(times_grid))

# print(costs_prm)

# prm = PRM(250)
# prm.generate_points(terrain)
# prm.connect_nodes_knn(5)
# pygame.display.update()

# astar = Astar(prm.nodes[0], prm.nodes[1])
# astar.find_path(terrain)
