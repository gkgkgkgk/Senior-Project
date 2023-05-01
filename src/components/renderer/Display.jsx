import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import Box from './Box'
import "./Display.css"
// Simple display component
const Display = () => {
  return (
    <div className='canvas'>
    <Canvas>
      <mesh>
        <ambientLight />
        <meshStandardMaterial color="hotpink" />
        <Box position={[0, 1, 0]} />
      </mesh>
    </Canvas>
    </div>
  );
};

export default Display;