class Map:
    def __init__(self, cells=[]):
        self.cells = cells
        self.addCell(0,0,0)

    def sampleCell(self, x, y):
        return map(lambda cell: cell.x == x and cell.y == y, self.cells)
    
    def addCell(self, x, y, weight):
        cell = Cell(x, y, weight)
        self.cells.append(cell)
        return cell

    def normalize_weights(self): # makes all weights between -1 and 1
        min_weight = min((cell.raw_weight for cell in self.cells))
        max_weight = max((cell.raw_weight for cell in self.cells))

        for cell in self.cells:
            if cell.raw_weight < 0:
                cell.weight = (cell.raw_weight)/(-min_weight)
            else:
                cell.weight = (cell.raw_weight)/(max_weight)

class Cell:
    def __init__(self, x, y, weight):
        self.x = x
        self.y = y
        self.weight = weight
        self.raw_weight = weight
    
    def __repr__(self):
        return "(" + str(self.x) + ", " + str(self.y) + "), " + str(self.weight)