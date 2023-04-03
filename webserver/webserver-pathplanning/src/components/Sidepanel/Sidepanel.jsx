import React, { useState } from 'react';

function SidePanel(props) {

    const handleClick = () => {
        fetch('http://192.168.68.123:5000/get-map')
            .then(response => response.json())
            .then(data => props.setMap(data));
    }

    return (
        <div>
            <button onClick={handleClick}>Generate Random Map</button>
        </div>
    );
}

export default SidePanel;