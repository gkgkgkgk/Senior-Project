import numpy as np
import matplotlib.pyplot as plt
import time

# Function that gets points along a line
def get_points_on_line(start, end, sample_rate = 3):

    # Calculate the distance between the start and end points
    distance = ((end[0] - start[0]) ** 2 + (end[1] - start[1]) ** 2) ** 0.5
    
    # Calculate the step size between points
    step = distance / (int(distance*sample_rate*2)-1)
    
    # Create a list of points
    points = []
    for i in range(int(distance*sample_rate*2)):
        # Calculate the position of the point along the line
        position = i * step
        
        # Calculate the x and y coordinates of the point
        x = start[0] + position * (end[0] - start[0]) / distance
        y = start[1] + position * (end[1] - start[1]) / distance
        
        # Add the point to the list
        points.append((x, y))
    
    return points


# Function that finds what grid cells a line intersects with given start and end points
def get_intersect_cells(start, end, plot = True):

  points = []
  intersect_cells = []

  # If line is vertical
  if(start[0] == end[0]):
    for i in range(min(start[1],end[1]),max(start[1],end[1])+1):
      intersect_cells.append((start[0], i))

  # If line is horizontal
  elif(start[1] == end[1]):
    for i in range(min(start[0],end[0]),max(start[0],end[0])+1):
      intersect_cells.append((i,start[1]))

  # If line is diagonal with positive slope
  elif((end[1] - start[1])/(end[0] - start[0]) == 1):
    for i in range(abs(start[0] - end[0]) + 1):
      intersect_cells.append((min(start[0],end[0]) + i, min(start[1],end[1]) + i))

  # If line is diagonal with negative slope
  elif((end[1] - start[1])/(end[0] - start[0]) == -1):
    for i in range(abs(start[0] - end[0]) + 1):
      intersect_cells.append((min(start[0],end[0]) + i, max(start[1],end[1]) - i))

  # If line is on any other angle
  else:
    # Get points along line
    points = get_points_on_line(start, end)

    # Get all cells that make up the smallest square that surrounds the line
    x = np.linspace(start[0], end[0], abs(end[0] - start[0])+1)
    y = np.linspace(start[1], end[1], abs(end[1] - start[1])+1)
    x_1, y_1 = np.meshgrid(x, y)
    cells = np.vstack([x_1.ravel(), y_1.ravel()])

    # Loop through all the points on the line
    for point in points:

      # Loop through the cells in the smallest square that surrounds the line and check if the current point is in it
      for i in range(len(cells[0])):
        cell_x = int(cells[0][i])
        cell_y = int(cells[1][i])

        # If the cell isn't already in the intersect list, add the point is within the cell, add the cell to the list
        if (cell_x,cell_y) not in intersect_cells:
          if (point[0] >= cell_x - 0.5) and (point[0] < cell_x + 0.5) and (point[1] >= cell_y - 0.5) and (point[1] < cell_y + 0.5):
            intersect_cells.append((cell_x,cell_y))
            break

  # Displaying line and intersecting cells
  if plot:
    fig = plt.figure(figsize=(15,15))
    ax = fig.add_subplot(1, 1, 1)

    # Plotting line
    plt.plot([start[0],end[0]],[start[1],end[1]])

    # Plotting sampled points along line
    if(points):
      sample_xs, sample_ys = zip(*points)
      plt.scatter(sample_xs, sample_ys)

    # Plotting which cells intersect with line
    cell_xs, cell_ys = zip(*intersect_cells)
    plt.scatter(cell_xs, cell_ys, color = 'red')

    # Showing grid cell borders
    minor_ticks_x = np.arange(min(start[0],end[0]) - 1.5, max(start[0],end[0]) + 2.5, 1)
    major_ticks_x = np.arange(min(start[0],end[0]) - 1, max(start[0],end[0]) + 2, 1)

    minor_ticks_y = np.arange(min(start[1],end[1]) - 1.5, max(start[1],end[1]) + 2.5, 1)
    major_ticks_y = np.arange(min(start[1],end[1]) - 1, max(start[1],end[1]) + 2, 1)

    ax.set_xticks(major_ticks_x)
    ax.set_xticks(minor_ticks_x, minor=True)
    ax.set_yticks(major_ticks_y)
    ax.set_yticks(minor_ticks_y, minor=True)
    ax.grid(which='minor', alpha=1)
    ax.grid(which='major', alpha=0)
    ax.set_aspect('equal')
    plt.show()

  return intersect_cells


start = [1,1]
end = [3,4]

s = time.time()
cells = get_intersect_cells(start,end, plot = False)
print(time.time()-s)
print(cells)