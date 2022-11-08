import pygame
from terrain import Terrain
from prm import PRM
from prm import Node

pygame.init()
screen_dim = (1024, 1024)
screen = pygame.display.set_mode(screen_dim)
screen.fill((0, 0, 0))
pygame.display.set_caption('Algo Playground 2.0')
pygame.display.set_icon(pygame.image.load('assets/logo.png'))
pygame.display.flip()

terrain = Terrain(16, 32, 16)
terrain.draw(screen)

prm = PRM(20)
prm.generate_points(terrain)
prm.connect_nodes_knn(5)
prm.draw(screen, terrain)

nodea = Node(2, 1)
nodeb = Node(5, 3)

terrain.calculate_line_cost(nodea, nodeb, screen, draw=True)
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    pygame.display.update()
