import React, { useState } from 'react';

function PathManager(props) {

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            {props.paths? props.paths.map((path, index)=>{
                let color = props.pathColors[index]
                console.log(color)
                return (<div style={{color:color, fontWeight:700, textDecoration:'underline'}}>
                    <p>Path {index + 1}</p>
                    </div>)
            }) : null}
        </div>
    );
}

export default PathManager;