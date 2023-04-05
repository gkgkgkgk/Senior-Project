import React, { useState } from 'react';

function Hover(props) {
    let xPos = props.mousePos.x;
    let yPos = props.mousePos.y;

    return (
        <div style={{ backgroundColor: "#000000", color: "#ffffff", borderRadius: "5px", position: "absolute", transform: `translate(${xPos + 10}px, ${yPos + 10}px)` }}>
            <p>{props.cellHover.raw_weight}</p>
            <p>({props.cellHover.x}, {props.cellHover.y})</p>
        </div>
    );
}

export default Hover;