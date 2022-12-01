class RobotConfig:
    def __init__(self, max_speed, speed_vs_incline, max_step_height_up, max_step_height_down, max_incline_up, max_incline_down):
        self.max_speed = max_speed
        self.speed_vs_incline = speed_vs_incline
        self.max_step_height_up = max_step_height_up
        self.max_step_height_down = max_step_height_down 
        self.max_incline_up = max_incline_up
        self.max_incline_down = max_incline_down