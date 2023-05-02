import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshBasicMaterial } from 'three';

const Box = (props) => {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    return (
        <mesh
        {...props}
        ref={ref}
        castShadow={true}
        receiveShadow={true}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={props.size} />
        <meshStandardMaterial attach="material" color={props.color} />
        {/* <meshToonMaterial color={props.color}></meshToonMaterial> */}
      </mesh>
    );
  };
  
  export default Box;