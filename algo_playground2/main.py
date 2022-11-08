import pygame
from terrain import Terrain
from maps import PRM, Grid
from pathfinding import Astar

pygame.init()
screen_dim = (1024, 1024)
screen = pygame.display.set_mode(screen_dim)
screen.fill((0, 0, 0))
pygame.display.set_caption('Algo Playground 2.0')
pygame.display.set_icon(pygame.image.load('assets/logo.png'))
pygame.display.flip()

terrain = Terrain(64, 16, 16, random=True)
terrain.draw(screen)

# grid = Grid(4)
# grid.generate_points(terrain)
# grid.draw(screen, terrain)

prm = PRM(250)
prm.generate_points(terrain)
prm.connect_nodes_knn(5)
prm.draw(screen, terrain)
pygame.display.update()

astar = Astar(prm.nodes[0], prm.nodes[1])
# astar = Astar(grid.nodes[0], grid.nodes[-1])
astar.find_path(terrain)
astar.draw(screen, terrain)
print(astar.path_cost)


running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    pygame.display.update()
