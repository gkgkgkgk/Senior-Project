import numpy as np
import open3d as o3d
import matplotlib.pyplot as plt

# Function to convert 3D point cloud (PCD file) into 2.5D heightmap to use with path finding algorithm
def pcd_2_map(path, cell_size = .5, scaling_factor = 2, downsample_factor = .0001):

    # Reading PCD file and getting points and normals
    pcd = o3d.io.read_point_cloud(path)
    pcd = pcd.voxel_down_sample(voxel_size = downsample_factor)
    pcd.estimate_normals(search_param=o3d.geometry.KDTreeSearchParamHybrid(radius = cell_size, max_nn = 30))

    points_arr = np.asarray(pcd.points)*scaling_factor
    norms_arr =  np.asarray(pcd.normals)
    cells = {}

    # Seperating points/norms into cells
    for i,point in enumerate(points_arr):

      cell_x = int(point[0]/cell_size)
      cell_y = int(point[1]/cell_size)
      cell_name = str(cell_x) + ":" + str(cell_y)
    
      if cell_name in cells:
        cells[cell_name]['points'].append(point)
        cells[cell_name]['norms'].append(norms_arr[i])
      else:
        cells[cell_name] = {'points' : [point], 'norms': [norms_arr[i]]}

    # Calculating metrics of each cell
    for cell in cells:
      Zs = np.array([point[-1] for point in cells[cell]['points']])
      # norms = cells[cell]['norms']
      # np.mean(l, axis = 0)
      
      cells[cell]['max'] = Zs.max()
      cells[cell]['min'] = Zs.min()
      cells[cell]['mean'] = np.mean(Zs)
      cells[cell]['var'] = np.var(Zs)
      cells[cell]['norm_mean'] = np.mean(cells[cell]['norms'], axis = 0)
      cells[cell]['norm_var'] = np.sum(np.var(cells[cell]['norms'], axis = 0))
      # print(cells[cell]['norms'])
      # print(cells[cell]['norm_mean'])
      # print(cells[cell]['norm_var'])
      # print("-----------")
      cells[cell].pop('points')
      cells[cell].pop('norms')
      # print(cells[cell])

pcd_2_map('ex3.pcd')