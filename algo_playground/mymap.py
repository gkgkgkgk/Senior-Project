import pygame
import numpy as np

class Map:
    def __init__(self, dim, gs, screen_dim):
        self.dim = dim
        self.grid_size = gs
        self.bounds = [(int((screen_dim[0] - dim[0])/2), int((screen_dim[0] + dim[0])/2)), (int((screen_dim[1] - dim[1])/2), int((screen_dim[1] + dim[1])/2))]
        self.obstacles = []

    def draw(self, screen):
        pygame.draw.rect(screen, (255, 255, 255), pygame.Rect(self.bounds[0][0], self.bounds[1][0], self.dim[0], self.dim[0]))
        
        for h in range(self.bounds[0][0], self.bounds[0][1], self.grid_size):
            pygame.draw.line(screen, (200, 200, 255), (self.bounds[0][0], h), (self.bounds[0][1], h))

        for v in range(self.bounds[1][0], self.bounds[1][1], self.grid_size):
            pygame.draw.line(screen, (200, 200, 255), (v, self.bounds[1][0]), (v, self.bounds[1][1]))

        for obstacle in self.obstacles:
            pygame.draw.rect(screen, (120, 0, 0), pygame.Rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h))


    def generate_random_obstacles(self, num_obstacles, max_size):
        for _ in range(num_obstacles):
            not_touching = True
            while not_touching:
                x = np.random.randint(self.bounds[0][0] / self.grid_size, 1 + self.bounds[0][1] / self.grid_size) * self.grid_size + 1
                y = np.random.randint(self.bounds[0][0] / self.grid_size, 1 + self.bounds[0][1] / self.grid_size) * self.grid_size + 1
                w = np.random.randint(1, max_size + 1) * self.grid_size -2
                h = np.random.randint(1, max_size + 1) * self.grid_size -2
                obstacle = Obstacle(x, y, w, h)

                if obstacle.not_touching(self.obstacles):
                    self.obstacles.append(obstacle)
                    not_touching = False


class Obstacle:
    def __init__(self, x, y, w, h):
        self.x = x
        self.y = y
        self.w = w
        self.h = h

    def not_touching(self, obstacles):
        for obstacle in obstacles:
            if ((max(obstacle.x + obstacle.w, self.x + self.w) - min(self.x, obstacle.x)) <= 4 + obstacle.w + self.w and 
                (max(obstacle.y + obstacle.h, self.y + self.h) - min(self.y, obstacle.y)) <= 4 + obstacle.h + self.h):
                return False
        return True