import pygame
from map import Map
from drawer import Drawer

pygame.init()
screen_dim = (1024, 1024)
screen = pygame.display.set_mode(screen_dim)
screen.fill((100, 100, 100))
pygame.display.set_caption('Algo Playground 2.0')
pygame.display.set_icon(pygame.image.load('assets/logo.png'))
pygame.display.flip()

drawer = Drawer(screen)

my_map = Map()
my_map.generate_random_map(55, 64, 2, rocks=False)
# my_map.addCell(1,0,0)
# my_map.addCell(-1,0,25.5)
# my_map.addCell(0,1,13)
# my_map.addCell(0,-1,2)
# my_map.addCell(0,-5,-2)
# my_map.addCell(1,-5,4)
# my_map.addCell(0,-2,-5)
my_map.normalize_weights()
# my_map.addCell(3,-5,0)
# my_map.addCell(0,-4,0)
# my_map.addCell(-6,0,0)


drawer.drawMap(my_map, random_colors=False)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            drawer.draw_weight(my_map, pygame.mouse.get_pos())
        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 3:
            drawer.drawMap(my_map, random_colors=False)

    pygame.display.update()
