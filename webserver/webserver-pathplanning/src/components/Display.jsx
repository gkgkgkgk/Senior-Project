import React, { useRef, useEffect, useState } from "react";
import Two from "two.js";
import tinycolor from "tinycolor2";

const Display = (props) => {
    const domElement = useRef();
    const [two, setTwo] = useState(null);

    useEffect(setup, []);
    renderCells(props.my_map);

    function setup() {
        let newTwo = new Two({
            height: 1024,
            width: 1024,
            autostart: true,
            type: Two.Types.canvas,
        }).appendTo(domElement.current);

        setTwo(newTwo);

        var background = newTwo.makeRectangle(newTwo.width / 2, newTwo.width / 2, newTwo.width, newTwo.height);
        background.fill = "#afafaf";

        return unmount;

        function unmount() {
            newTwo.unbind("update");
            newTwo.pause();
            domElement.current.removeChild(newTwo.renderer.domElement);
        }

    }

    function renderCells(my_map) {
        console.log("HERE")
        if (my_map == undefined || my_map.cells == undefined) {
            return;
        }

        let min_x = Math.min(...my_map.cells.map(cell => cell.x));
        let max_x = Math.max(...my_map.cells.map(cell => cell.x));
        let min_y = Math.min(...my_map.cells.map(cell => cell.y));
        let max_y = Math.max(...my_map.cells.map(cell => cell.y));

        let max_size = Math.max(Math.abs(min_x), Math.abs(min_y), max_x, max_y) + 1;
        let cell_size = Math.floor(two.width / (max_size * 2));

        let center = two.width / 2;

        my_map.cells.forEach(cell => {
            let x = center + cell.x * cell_size;
            let y = center - cell.y * cell_size;
            var cellRect = two.makeRectangle(x, y, cell_size, cell_size);
            cellRect.fill = weightToColor(cell.normalized_weight);
            cellRect.linewidth = 0;

            cellRect.bind("mouseover", () => {
                showPopup(cell, x, y);
            });
            cellRect.bind("mouseout", () => {
                hidePopup();
            });
        });
    }

    function showPopup(cell, x, y) {
        console.log(cell);
        // Create the popup element and position it next to the cell
        const popup = document.createElement("div");
        popup.innerHTML = `Cell (${cell.x}, ${cell.y})<br>Weight: ${cell.weight}`;
        popup.style.position = "absolute";
        popup.style.left = x + "px";
        popup.style.top = y + "px";
        popup.style.backgroundColor = "#ffffff";
        popup.style.padding = "5px";
        popup.style.border = "1px solid #000000";
        // Add the popup element to the DOM
        domElement.current.parentNode.appendChild(popup);
    }

    function hidePopup() {
        // Remove the popup element from the DOM
        const popup = domElement.current.parentNode.querySelector(".popup");
        if (popup) {
            domElement.current.parentNode.removeChild(popup);
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


    return <div ref={domElement} />;
}

export default Display;