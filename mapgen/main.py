import pygame
from map import Map
from drawer import Drawer
from graphs import PRM
from pathfinding import Astar
from robot import RobotConfig
import numpy as np

pygame.init()
screen_dim = (1024, 1024)
screen = pygame.display.set_mode(screen_dim)
screen.fill((100, 100, 100))
pygame.display.set_caption('Algo Playground 2.0')
pygame.display.set_icon(pygame.image.load('assets/logo.png'))
pygame.display.flip()

drawer = Drawer(screen)

config = RobotConfig(3, [(0, 3), (45, 1.5), (75, 0.5)], 1, 1, 75, 75)
seed = 231
my_map = Map()
my_map.generate_random_map(32, 1/64, 8, rocks=False, seed=seed)
print(my_map)

weight = 0.47
for i in range(7):
    my_map.setCell(-13+i, 9-i, weight)
    my_map.setCell(-12+i, 10-i, weight)
    my_map.setCell(-11+i, 11-i, weight)
    my_map.setCell(-10+i, 12-i, weight)
    my_map.setCell(-9+i, 13-i, weight)

    my_map.setCell(-12+i, 9-i, weight)
    my_map.setCell(-11+i, 10-i, weight)
    my_map.setCell(-10+i, 11-i, weight)
    my_map.setCell(-9+i, 12-i, weight)
    
    weight += 0.04

#cleanup
my_map.setCell(-10, 5, 0.45)
my_map.setCell(-9, 4, 0.51)
my_map.setCell(-4, 9, 0.4)
my_map.setCell(-3, 8, 0.5)
my_map.setCell(-3, 9, 0.35)
my_map.setCell(-5, 10, 0.45)
my_map.setCell(-10, 13, 0.48)
my_map.setCell(-11, 12, 0.47)

weight = 0.32

for i in range(2):
    my_map.setCell(-5+i, 15, weight)
    my_map.setCell(-5+i, 14, weight)
    my_map.setCell(-5+i, 13, weight)
    my_map.setCell(-5+i, 12, weight)
    my_map.setCell(-5+i, 11, weight)
    weight -= 0.03

weight = 0.26
for i in range(11):
    my_map.setCell(-3+i, 15, weight)
    my_map.setCell(-3+i, 14, weight)
    my_map.setCell(-3+i, 13, weight)
    my_map.setCell(-3+i, 12, weight)
    my_map.setCell(-3+i, 11, weight)
    my_map.setCell(-3+i, 10, (weight/1.25) + np.random.uniform()/20.0)
    my_map.setCell(-3+i, 9, (weight/1.5) + np.random.uniform()/20.0)
    my_map.setCell(-3+i, 8, (weight/2) + np.random.uniform()/20.0)
    my_map.setCell(-3+i, 7, (weight/4) + np.random.uniform()/20.0)
    weight += 0.04

for i in range(3):
    my_map.setCell(8 + i, 15, weight)
    my_map.setCell(8+i, 14, weight)
    my_map.setCell(8+i, 13, weight)
    my_map.setCell(8+i, 12, weight)
    my_map.setCell(8+i, 11, weight)
    my_map.setCell(8+i, 10, (weight/1.25) + np.random.uniform()/20.0)
    my_map.setCell(8+i, 9, (weight/1.5) + np.random.uniform()/20.0)
    my_map.setCell(8+i, 8, (weight/2) + np.random.uniform()/20.0)
    my_map.setCell(8+i, 7, (weight/4) + np.random.uniform()/20.0)
    weight -= 0.08

for i in range(11, 16):
    for j in range(11, 16):
        my_map.setCell(i, j, weight)


for i in range(10):
    my_map.setCell(11, 10 - i, weight)
    my_map.setCell(12, 10 - i, weight)
    my_map.setCell(13, 10 - i, weight)
    my_map.setCell(14, 10 - i, weight)
    my_map.setCell(15, 10 - i, weight)

    weight -= 0.08

for i in range(-9, 3):
    for j in range(-14, -2):
        my_map.setCell(i, j, np.random.uniform() / 7.5, additive = True)


my_map.normalize_weights()

path_map = PRM(100)
path_map.generate_points(my_map, (-15,14), (14, -16))
path_map.connect_nodes_knn(5)

drawer.drawMap(my_map, random_colors=False)
drawer.draw_prm(path_map, my_map)

astar = Astar(path_map.nodes['-15,14'], path_map.nodes['14,-16'])
astar.find_path(my_map)
drawer.draw_path(astar, my_map)

# path = my_map.calculate_cost(p)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            drawer.draw_weight(my_map, pygame.mouse.get_pos())
        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 3:
            drawer.drawMap(my_map, random_colors=False)
            # drawer.draw_prm(path_map, my_map)

    pygame.display.update()

drawer.graphic(my_map, [astar])
