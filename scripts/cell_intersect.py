import numpy as np
import matplotlib.pyplot as plt
import time
import math

# Function that gets points along a line
def get_points_on_line(start, end):

    start_x = min(start[0],end[0])
    end_x = max(start[0],end[0])
    xs = np.linspace(start_x+.5, end_x-.5, end_x-start_x).tolist()
    xs.insert(0,start_x)
    xs.append(end_x)

    start_y = min(start[1],end[1])
    end_y = max(start[1],end[1])
    ys = np.linspace(start_y+.5, end_y-.5, end_y-start_y).tolist()

    x_int = []
    for x in xs:
      # Calculate the slope of the line
      slope = (end[1] - start[1]) / (end[0] - start[0])
    
      # Calculate the y intercept of the line
      y_intercept = start[1] - slope * start[0]
      
      # Calculate the y coordinate of the point on the line with the given x coordinate
      y_coordinate = slope * x + y_intercept
      x_int.append([x,y_coordinate])
    
    y_int = []
    for y in ys:
      # Calculate the slope of the line
      slope = (end[0] - start[0]) / (end[1] - start[1])
      
      # Calculate the x intercept of the line
      x_intercept = start[0] - slope * start[1]
      
      # Calculate the x coordinate of the point on the line with the given y coordinate
      x_coordinate = slope * y + x_intercept
      if [x_coordinate,y] not in x_int:
        y_int.append([x_coordinate,y])

    return x_int + y_int


# Function that finds what grid cells a line intersects with given start and end points
def get_intersect_cells(start, end, plot = True):

  points = []
  intersect_cell_lengths = []
  
  # If line is vertical
  if(start[0] == end[0]):
    for i in range(min(start[1],end[1]),max(start[1],end[1])+1):
      if(i == min(start[1],end[1]) or i == max(start[1],end[1])):
        leng = .5
      else:
        leng  = 1
      intersect_cell_lengths.append((start[0], i, leng))
      
  # If line is horizontal
  elif(start[1] == end[1]):
    for i in range(min(start[0],end[0]),max(start[0],end[0])+1):
      if(i == min(start[0],end[0]) or i == max(start[0],end[0])):
        leng = .5
      else:
        leng = 1
      intersect_cell_lengths.append((i,start[1], leng))

  # If line is diagonal with positive slope
  elif((end[1] - start[1])/(end[0] - start[0]) == 1):
    for i in range(abs(start[0] - end[0]) + 1):
      if(i == 0 or i == abs(start[0] - end[0])):
        leng = 0.70710678
      else:
        leng = 1.41421356
      intersect_cell_lengths.append((min(start[0],end[0]) + i, min(start[1],end[1]) + i, leng))

  # If line is diagonal with negative slope
  elif((end[1] - start[1])/(end[0] - start[0]) == -1):
    for i in range(abs(start[0] - end[0]) + 1):
      if(i == 0 or i == abs(start[0] - end[0])):
        leng = 0.70710678
      else:
        leng = 1.41421356
      intersect_cell_lengths.append((min(start[0],end[0]) + i, max(start[1],end[1]) - i, leng))

  # If line is on any other angle
  else:
    # Get points along line
    points = get_points_on_line(start, end)

    # Get all cells that make up the smallest square that surrounds the line
    x = np.linspace(start[0], end[0], abs(end[0] - start[0])+1)
    y = np.linspace(start[1], end[1], abs(end[1] - start[1])+1)
    x_1, y_1 = np.meshgrid(x, y)
    cells = np.vstack([x_1.ravel(), y_1.ravel()])

    int_cell_points = {}

    # Loop through all the points on the line
    for point in points:

      # Loop through the cells in the smallest square that surrounds the line and check if the current point is in it
      for i in range(len(cells[0])):
        cell_x = int(cells[0][i])
        cell_y = int(cells[1][i])

        # If the cell isn't already in the intersect list, add the point is within the cell, add the cell to the list
        if (point[0] >= cell_x - 0.5) and (point[0] <= cell_x + 0.5) and (point[1] >= cell_y - 0.5) and (point[1] <= cell_y + 0.5):
          cell_name = str(cell_x) + ":" + str(cell_y)
          if cell_name not in int_cell_points:
            # intersect_cells.append((cell_x,cell_y))
            int_cell_points[cell_name] = []
          int_cell_points[cell_name].append(point)
          
          if len(int_cell_points[cell_name]) == 2:
            intersect_cell_lengths.append((cell_x, cell_y, math.dist(int_cell_points[cell_name][0],int_cell_points[cell_name][1])))


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
    cell_xs = [c[0] for c in intersect_cell_lengths]
    cell_ys = [c[1] for c in intersect_cell_lengths]
    tot = sum([c[2] for c in intersect_cell_lengths])
    print("tot: " + str(tot))
    print("act: " + str(math.dist(start,end)))

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

  # print(inter_cells_lengths)
  return intersect_cell_lengths


start = [0,0]
end = [100,101]

# get_points_on_line(start, end)
s = time.time()
cells = get_intersect_cells(start,end, plot = False)
print(time.time()-s)
print(cells)