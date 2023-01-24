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
my_map = Map(config=config)
my_map.generate_random_map(32, 1/64, 8, rocks=False, seed=seed)
print(my_map)

my_map.normalize_weights()

path_map = PRM(250)
path_map.generate_points(my_map, (-16,15), (15, -16))
path_map.connect_nodes_knn(5)

drawer.drawMap(my_map, random_colors=False)
drawer.draw_prm(path_map, my_map)

astar = Astar(path_map.nodes['-16,15'], path_map.nodes['15,-16'])
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