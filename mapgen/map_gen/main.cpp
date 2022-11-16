#include <iostream>
#include "./map.h"
#include <algorithm>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string>

using namespace std;

void generateFakeMapFromFile(string file_path, Map *map)
{
    ifstream mapFile(file_path);
    string line;
    int counter = 0;
    while (getline(mapFile, line))
    {
        counter++;
        int x;
        int y;
        float weight;

        std::replace(line.begin(), line.end(), ',', ' ');

        stringstream ss(line);

        ss >> x;
        ss >> y;
        ss >> weight;

        map->addCell(x, y, weight);
    }

    cout << "Added " << counter << " cells to the map from file " << file_path << "." << endl;
}

int main()
{
    Map map = Map(0, 0, 0.0);
    generateFakeMapFromFile("./input_maps/map1.txt", &map);
    return 0;
}
