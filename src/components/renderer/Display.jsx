import React, { useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber'
import { OrthographicCamera, OrbitControls } from '@react-three/drei'
import Path from './Path';

import Box from './Box'
import "./Display.css"
import Camera from './Camera';
// Simple display component
const Display = (props) => {
  const [pointMap, setPointMap] = useState(() =>
    props.myMap.reduce((map, obj) => {
      const {x, y} = obj;
      map[`${x},${y}`] = obj;
      return map;
    }, {})
  );
  
  return (
    <div className='displayContainer'>
    <div className='canvas'>
    <Canvas camera={{ manual: true }}>
      <directionalLight color={'white'} intensity={0.25} castShadow position={[0, 8, 0]} />
      <directionalLight color={'white'} intensity={0.25} castShadow position={[8, 4, 0]} />

        {props.myMap.map(item =>{
          let weight = item.normalized_weight * 3
          let height = weight + 3.1;
          let y = height /2;
          return <Box color={'white'} height={height} position={[item.x, y, item.y]} />
        })}
        <Path color={0x008cff} points={props.path} myMap={pointMap}></Path>
        <Box color={'green'} height={1} position={[-16, 5.3, 15]} />
        <Box color={'red'} height={1} position={[15, 2.2, -16]} />
        <OrbitControls enableZoom={true} enablePan={false}
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI/6}
          maxPolarAngle={3*Math.PI/7}
          maxZoom={20}
          minZoom={5}
          />
        <Camera></Camera>
    </Canvas>
    </div>
      <p className='note'>The green box is the start, the red box is the destination.</p>
      <div className="sliders">
            <div className='sliderItem'>
            <label for="speed-slider">Speed</label>
            <input type="range" id="speed-slider" name="speed" min="0" max="100" defaultValue={props.speed} onChange={e => props.setSpeed(parseInt(e.target.value))}/>
            </div>
            <div className='sliderItem'>
            <label for="safety-slider">Safety</label>
            <input type="range" id="energy-slider" name="safety" min="0" max="100" defaultValue={props.safety} onChange={e => props.setSafety(parseInt(e.target.value))}/>
            </div>
            <div className='sliderItem'>
            <label for="energy-slider">Energy</label>
            <input type="range" id="energy-slider" name="energy" min="0" max="100" defaultValue={props.energy} onChange={e => props.setEnergy(parseInt(e.target.value))}/>
            </div>
            <hr/>
            <button onClick={props.handleGetPath}>Generate Path!</button>
        </div>
    </div>
  );
};

export default Display;