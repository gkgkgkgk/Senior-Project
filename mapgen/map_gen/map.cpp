#include "map.h"
#include <string>

Map::Map(int x, int y, float weight)
{
    std::string pos = std::to_string(x) + std::to_string(y);
    Cell cell = Cell(x, y, weight);
    this->cells[pos] = &cell;
};

void Map::addCell(int x, int y, float weight)
{
    std::string pos = std::to_string(x) + std::to_string(y);
    Cell cell = Cell(x, y, weight);
    this->cells[pos] = &cell;
}