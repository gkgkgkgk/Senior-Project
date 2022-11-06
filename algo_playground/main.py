import pygame
from prm import generate_prm
from pathfinding import astar

pygame.init()
screen_dim = (800, 800)
screen = pygame.display.set_mode(screen_dim)
screen.fill((100, 100, 100))
pygame.display.set_caption('Algo Playground')
pygame.display.set_icon(pygame.image.load('assets/logo.png'))
pygame.display.flip()

grid_size = 25
map_dim = (600, 600)
bounds = [(int((screen_dim[0] - map_dim[0])/2), int((screen_dim[0] + map_dim[0])/2)), (int((screen_dim[1] - map_dim[1])/2), int((screen_dim[1] + map_dim[1])/2))]

pygame.draw.rect(screen, (255, 255, 255), pygame.Rect(100, 100, 600, 600))


for h in range(bounds[0][0], bounds[0][1], grid_size):
    pygame.draw.line(screen, (200, 200, 255), (bounds[0][0], h), (bounds[0][1], h))

for v in range(bounds[1][0], bounds[1][1], grid_size):
    pygame.draw.line(screen, (200, 200, 255), (v, bounds[1][0]), (v, bounds[1][1]))

running = True
nodes = generate_prm(200, 5, grid_size, bounds)
print(len(nodes))
for node in nodes:
    for edge in node.edges:
        pygame.draw.line(screen, (0, 0, 0), (node.x, node.y), (edge.x, edge.y))
    pygame.draw.circle(screen, (255, 0,0), (node.x, node.y), node.f * 2)

path = astar(nodes[0], nodes[1])
for i in range(0, len(path)-1):
    pygame.draw.line(screen, (0, 255, 0), (path[i].x, path[i].y), (path[i+1].x, path[i+1].y), width=3)

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    # screen.fill((100, 100, 100))
    pygame.display.update()

