import React, { useRef, useEffect, useState } from "react";
import * as PIXI from "pixi.js";
import tinycolor from "tinycolor2";
import Hover from "./hover";

const Display = (props) => {
    const domElement = useRef();
    const [app, setApp] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [cellHover, setCellHover] = useState({});

    useEffect(setup, []);

    function setup() {
        let newApp = new PIXI.Application({
            height: 1024,
            width: 1024,
            antialias: true,
            backgroundColor: 0xafafaf
        });

        setApp(newApp);

        const onMouseMove = (event) => {
            // const { offsetX, offsetY } = event.data.global;
            // setMousePos({ x: offsetX, y: offsetY });
            // renderCells();
        };

        return unmount;

        function unmount() {
            // newApp.destroy();
            // domElement.current.removeChild(newApp.view);
        }
    }

    useEffect(() => {
        if (app && !app.view.parentNode) {
            console.log("here!!!")
            domElement.current.appendChild(app.view);
        }
    }, [app]);

    useEffect(() => {
        generateCells();
    }, [props.my_map]);

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

        let center = app.screen.width / 2;
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

    const getCellOnHover = (event, cells, cell_size) => {
        let x = (event.currentTarget.position.x - app.screen.width / 2) / cell_size;
        let y = (event.currentTarget.position.y - app.screen.width / 2) / cell_size;
        console.log(cells)
    }

    function weightToColor(weight) {
        let c = 255 - (200 * Math.abs(weight));
        let rgb = [c, c, 255]
        if (weight < 0) {
            rgb = [255, c, c];
        }

        return tinycolor({ r: rgb[0], g: rgb[1], b: rgb[2] }).toHexString();
    }


    return <div ref={domElement}><Hover mousePos={mousePos} cellHover={cellHover}></Hover></div>;
}

export default Display;