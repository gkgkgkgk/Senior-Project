# This is a simple class to keep track of the robot specifications.
class RobotConfig:
    def user_init(self, mass, gravity, friction, wheel_diameter):
        self.mass = mass
        self.gravity = gravity
        self.friction = friction
        self.wheel_diameter = wheel_diameter

    def __init__(self, max_speed, speed_vs_incline, max_step_height_up, max_step_height_down, max_incline_up, max_incline_down, min_energy_per_unit, energy_vs_incline):
        self.max_speed = max_speed
        self.speed_vs_incline = speed_vs_incline
        self.max_step_height_up = max_step_height_up
        self.max_step_height_down = max_step_height_down 
        self.max_incline_up = max_incline_up
        self.max_incline_down = max_incline_down
        self.min_energy_per_unit = min_energy_per_unit
        self.energy_vs_incline = energy_vs_incline

    # def energy_vs_incline(self, incline, distance):
