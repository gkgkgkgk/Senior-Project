import React, { useState } from 'react';

function SidePanel(props) {

    const handleClickMap = () => {
        fetch('http://192.168.68.156:5000/get-map')
            .then(response => response.json())
            .then(data => { props.setMap(data) });
    }

    const handleClickGraph = () => {
        fetch('http://192.168.68.156:5000/get-prm?size=32')
            .then(response => response.json())
            .then(data => { console.log(data) });
    }

    return (
        <div>
            <button onClick={handleClickMap}>Generate Random Map</button>
            <button onClick={handleClickGraph}>Generate PRM</button>
        </div>
    );
}

export default SidePanel;