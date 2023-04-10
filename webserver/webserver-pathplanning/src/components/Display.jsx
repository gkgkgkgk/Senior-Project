import React, { useRef, useEffect, useState } from "react";
import * as PIXI from "pixi.js";
import tinycolor from "tinycolor2";
import Hover from "./hover";

const Display = (props) => {
    const domElement = useRef();
    const [app, setApp] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [cellHover, setCellHover] = useState({});
    const [center, setCenter] = useState(0);
    const [cell_size, setCellSize] = useState(0);

    useEffect(setup, []);

    function setup() {
        let newApp = new PIXI.Application({
            height: 800,
            width: 800,
            antialias: true,
            backgroundAlpha: 0
        });

        setApp(newApp);
        setCenter(newApp.screen.width / 2);
        
        return unmount;

        function unmount() {
            if(newApp)
                newApp.destroy();
        }
    }

    useEffect(() => {
        if (app && !app.view.parentNode) {
            domElement.current.appendChild(app.view);
        }
    }, [app]);

    useEffect(() => {
        generateCells();
    }, [props.my_map]);

    useEffect(() => {
        generateGraph();
    }, [props.graph]);

    useEffect(() => {
        generatePaths();
    }, [props.paths]);

    function generateCells() {
        let my_map = props.my_map;
        if (my_map == undefined || my_map.cells == undefined) {
            return;
        }

        let min_x = Math.min(...my_map.cells.map((cell) => cell.x));
        let max_x = Math.max(...my_map.cells.map((cell) => cell.x));
        let min_y = Math.min(...my_map.cells.map((cell) => cell.y));
        let max_y = Math.max(...my_map.cells.map((cell) => cell.y));

        let max_size = Math.max(Math.abs(min_x), Math.abs(min_y), max_x, max_y) + 1;
        let cell_size = Math.floor(app.screen.width / (max_size * 2));
        setCellSize(cell_size);

        let newRects = [];

        app.stage.removeChildren();
        let newCells = {}
        my_map.cells.forEach((cell) => {
            let x = center + cell.x * cell_size;
            let y = center - cell.y * cell_size;
            var cellRect = new PIXI.Graphics();
            cellRect.beginFill(weightToColor(cell.normalized_weight));
            cellRect.drawRect(0, 0, cell_size, cell_size);
            cellRect.pivot.x = cell_size / 2;
            cellRect.pivot.y = cell_size / 2;
            cellRect.position.set(x, y)

            cellRect.endFill();
            cellRect.eventMode = "dynamic";

            cellRect.pivot.x = cell_size / 2;
            cellRect.pivot.y = cell_size / 2;

            cellRect.on('mouseenter', (event) => {
                setCellHover(cell);
                setMousePos({ x: event.globalX, y: event.globalY });
            })

            cellRect.on('mouseleave', (event) => {
                event.currentTarget.scale.set(1);
            })

            newRects.push(cellRect);
            app.stage.addChild(cellRect);
            newCells[x + "," + y] = cell
        });
    }

    function generateGraph(){
        generateCells();
        let graph = props.graph;

        if(graph){
        let newGraphContainer = new PIXI.Container();
        graph.nodes.forEach((node) => {
            let nodeCircle  = new PIXI.Graphics();
            nodeCircle.beginFill(0x00ff00);
            nodeCircle.drawCircle(0, 0, 3);
            nodeCircle.endFill();

            let x = center + node.x * cell_size;
            let y = center - node.y * cell_size;
            nodeCircle.position.set(x, y)

            node.edges.forEach((edge) => {
                let nodeEdge = new PIXI.Graphics();
                let x1 = center + edge.x * cell_size;
                let y1 = center - edge.y * cell_size; 
                nodeEdge.moveTo(x,y).lineStyle(1, 0x00ff00).lineTo(x1, y1);
                app.stage.addChild(nodeEdge)
            })
            newGraphContainer.addChild(nodeCircle);
        })
        app.stage.addChild(newGraphContainer);
    }
    }

    function generatePaths(){
        let paths = props.paths;

        if(paths && paths.length > 0){
            let pathsContainer = new PIXI.Container();
            paths.forEach((path, pathIndex) => {
                let nodeContainer = new PIXI.Container();

                path.path.forEach((node, index) =>{
                    let nodeCircle = new PIXI.Graphics();
                    nodeCircle.beginFill(props.pathColors[pathIndex]);
                    nodeCircle.drawCircle(0,0,4);
                    nodeCircle.endFill();

                    let x = center + node.x * cell_size;
                    let y = center - node.y * cell_size;
                    nodeCircle.position.set(x, y)
                    nodeContainer.addChild(nodeCircle)

                    if(index > 0){
                        let previousNode = path.path[index-1];
                        let nodeEdge = new PIXI.Graphics();
                        let x1 = center + previousNode.x * cell_size;
                        let y1 = center - previousNode.y * cell_size; 
                        nodeEdge.moveTo(x,y).lineStyle(4, props.pathColors[pathIndex]).lineTo(x1, y1);
                        nodeContainer.addChild(nodeEdge)
                    }
                })

                pathsContainer.addChild(nodeContainer);
            })

            app.stage.addChild(pathsContainer);
        }
    }

    function weightToColor(weight) {
        let c = 255 - (200 * Math.abs(weight));
        let rgb = [c, c, 255]
        if (weight < 0) {
            rgb = [255, c, c];
        }

        return tinycolor({ r: rgb[0], g: rgb[1], b: rgb[2] }).toHexString();
    }


    return <div style={{margin: "50px"}} ref={domElement}><Hover mousePos={mousePos} cellHover={cellHover}></Hover></div>;
}

export default Display;