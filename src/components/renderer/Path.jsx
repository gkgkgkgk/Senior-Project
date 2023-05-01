import { CatmullRomLine } from '@react-three/drei';
import React, { useRef, useState } from 'react'
// import {Line} from '@react-three/fiber'

const Path = (props) => {
    const generatePoints = () => {
        let points = [];
        props.points.forEach(element => {
            points.push([element.x, props.myMap[element.x + "," + element.y].normalized_weight * 4 + 4, element.y]);
        });

        return points
    }
    return (
        <CatmullRomLine
            points = {generatePoints()}
            segments={500}
            lineWidth={10}
            color={props.color}
        />
    );
  };
  
  export default Path;