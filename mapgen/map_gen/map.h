#include "cell.h"
#include <map>

class Map
{
public:
    Map(int x, int y, float weight);
    Cell *sampleCell(int x, int y);
    void addCell(int x, int y, float weight);

private:
    std::map<std::string, Cell *> cells;
};