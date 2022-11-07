import pygame
from prm import generate_prm
from pathfinding import astar
from mymap import Map

pygame.init()
screen_dim = (800, 800)
screen = pygame.display.set_mode(screen_dim)
screen.fill((100, 100, 100))
pygame.display.set_caption('Algo Playground')
pygame.display.set_icon(pygame.image.load('assets/logo.png'))
pygame.display.flip()

grid_size = 50
mymap = Map((600, 600), grid_size, screen_dim)
mymap.generate_random_obstacles(5, 4)
mymap.draw(screen)

running = True
nodes = generate_prm(30, 5, mymap)
print(len(nodes))
for node in nodes:
    for edge in node.edges:
        pygame.draw.line(screen, (0, 0, 0), (node.x, node.y), (edge.x, edge.y), width = 2)
    pygame.draw.circle(screen, (0, 50,120), (node.x, node.y), node.f * 10)

# for node in nodes:
#     if len(node.edges) > 5:
#         print(str(node) + ", " + str(len(node.edges)))

path = astar(nodes[0], nodes[1])
for i in range(0, len(path)-1):
    pygame.draw.circle(screen, (0, 255,0), (path[i].x, path[i].y), 5)
    pygame.draw.line(screen, (0, 255, 0), (path[i].x, path[i].y), (path[i+1].x, path[i+1].y), width=3)

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    # screen.fill((100, 100, 100))
    pygame.display.update()

