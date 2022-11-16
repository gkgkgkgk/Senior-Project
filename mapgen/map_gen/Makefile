all: main.o cell.o map.o
	g++ -o main main.o cell.o map.o
	make clean
  
main.o: main.cpp cell.h map.h
	g++ -c main.cpp
 
cell.o: cell.h
 
map.o: map.h cell.h

clean:
	rm -rf *.o