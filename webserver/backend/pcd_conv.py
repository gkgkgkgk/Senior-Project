import numpy as np
import open3d as o3d
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from cell_intersect import get_intersect_cells

# Function to convert 3D point cloud (PCD file) into 2.5D heightmap to use with path finding algorithm
def pcd_2_map(path, cell_size = .5, max_radius = 50, max_step_height_up = -1.6, scaling_factor = 2, downsample_factor = 0.001, plot = False):

  # Reading PCD file and getting points and normals
  pcd = o3d.io.read_point_cloud(path)
  pcd = pcd.voxel_down_sample(voxel_size = downsample_factor)

  pcd.estimate_normals(search_param=o3d.geometry.KDTreeSearchParamHybrid(radius = cell_size, max_nn = 30))

  # o3d.visualization.draw_geometries([pcd],
  #                                 zoom=0.3412,
  #                                 front=[0.4257, 0.2125, -0.8795],
  #                                 lookat=[2.6172, 2.0475, 1.532],
  #                                 up=[-0.0694, 0.9768, 0.2024])
  # o3d.visualization.draw_geometries([pcd],
  #                                 zoom=0.3412,
  #                                 front=[0.4257, -0.2125, -0.8795],
  #                                 lookat=[2.6172, 2.0475, 1.532],
  #                                 up=[-0.0694, -0.9768, 0.2024],
  #                                 point_show_normal=False)
  
  
  points_arr = np.asarray(pcd.points)*scaling_factor
  norms_arr =  np.asarray(pcd.normals)
  cells = {}

  # Seperating points/norms into cells
  for i,point in enumerate(points_arr):

    cell_x = int(point[0]/cell_size)
    cell_y = int(point[1]/cell_size)


    if((cell_x <= max_radius) and (cell_x >= -max_radius) and (cell_y <= max_radius) and (cell_y >= -max_radius)):
      cell_name = str(cell_x) + ":" + str(cell_y)
      
      if cell_name in cells:
        cells[cell_name]['points'].append(point)
        cells[cell_name]['norms'].append(norms_arr[i])
      else:
        cells[cell_name] = {'points' : [point], 'norms': [norms_arr[i]]}

  # Calculating metrics of each cell
  for cell in cells:
    Zs = np.array([point[-1] for point in cells[cell]['points']])
      
    cells[cell]['max'] = Zs.max()
    cells[cell]['min'] = Zs.min()
    cells[cell]['mean'] = np.mean(Zs)
    cells[cell]['var'] = np.var(Zs)
    cells[cell]['norm_mean'] = np.mean(cells[cell]['norms'], axis = 0)
    cells[cell]['norm_var'] = np.sum(np.var(cells[cell]['norms'], axis = 0))
    # print(cells[cell]['max'])
    # print(cells[cell]['norm_mean'])
    # print(cells[cell]['norm_var'])
    # print("-----------")
    cells[cell].pop('points')
    cells[cell].pop('norms')
    # print(cells[cell])

  # Approximate values for missing cells
  for x in range(-max_radius,max_radius+1):
    for y in range(-max_radius,max_radius+1):
      obstacle = False
      cell_name = str(x) + ":" + str(y)
      if cell_name not in cells:
        # print([x,y])
        intersect_cells = get_intersect_cells([x,y],[0,0])
        for int_cell in intersect_cells:

          int_cell_name = str(int_cell[0]) + ":" + str(int_cell[1])

          if(int_cell_name in cells):
            if((cells[int_cell_name]["max"] > max_step_height_up) and (cells[int_cell_name]["mean"] < 5)):
              cells[cell_name] = {'max': 2, 'mean': 2}
              obstacle = True
              break
            # else:
            #   cells[cell_name] = {'max': max_step_height_up}
        
        if(obstacle == False):
          cells[cell_name] = {'max': max_step_height_up, 'mean': max_step_height_up}

  return cells
    
# cells = pcd_2_map('example.pcd', plot = False)
# print(cells)
