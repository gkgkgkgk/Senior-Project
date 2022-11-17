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
my_map.generate_random_map(128, 64, 2, rocks=True)
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


drawer.drawMap(my_map)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    pygame.display.update()
