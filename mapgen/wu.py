import numpy as np

def rasterize_line(x1, y1, x2, y2, grid_resolution=1):
    # Compute the line direction and length
    dx = x2 - x1
    dy = y2 - y1
    length = np.sqrt(dx**2 + dy**2)

    # Compute the step size for each pixel along the line
    if length == 0:
        return [(x1 // grid_resolution, y1 // grid_resolution)]
    else:
        step_x = dx / length
        step_y = dy / length

    # Compute the starting pixel coordinates
    x = x1 + 0.5 * step_x
    y = y1 + 0.5 * step_y

    # Rasterize the line
    pixels = []
    while True:
        # Determine the nearest pixel to the line at this point
        pixel_x = int(np.floor(x / grid_resolution))
        pixel_y = int(np.floor(y / grid_resolution))
        pixels.append((pixel_x, pixel_y))

        # Determine the next pixel along the line
        x += step_x
        y += step_y

        print((pixel_x, pixel_y))

        # Stop rasterizing the line if we have reached the end
        if np.sqrt((x - x2)**2 + (y - y2)**2) < grid_resolution:
            break

    return pixels

rasterize_line(0, 0, 5, 5)
