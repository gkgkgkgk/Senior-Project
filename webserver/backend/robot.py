import numpy as np
# This is a simple class to keep track of the robot specifications.
class RobotConfig:
    def user_init(self, mass, friction, wheel_diameter, width, gravity = 9.8):
        self.mass = mass
        self.gravity = gravity
        self.friction = friction
        self.wheel_diameter = wheel_diameter
        self.gravity = gravity
        self.width = width

    def __init__(self, max_speed, max_step_height_up, max_step_height_down, max_incline_up, max_incline_down, min_energy_per_unit):
        self.max_speed = max_speed
        self.max_step_height_up = max_step_height_up
        self.max_step_height_down = max_step_height_down 
        self.max_incline_up = max_incline_up
        self.max_incline_down = max_incline_down
        self.min_energy_per_unit = min_energy_per_unit

    def energy_vs_incline(self, rise, run):
        e = (self.max_speed * self.mass * self.gravity * rise) / (np.sqrt(rise **2 + run ** 2))
        return 0 if e < 0 else e

    def max_energy_vs_incline(self):
        return (self.max_speed * self.mass * self.gravity * np.sin(np.radians(self.max_incline_up)))
