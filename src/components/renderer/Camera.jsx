import React, { useRef, useState } from 'react'
import { OrthographicCamera, OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'

const Camera = (props) => {
    const { viewport } = useThree()
    console.log(viewport.width)
    return (
        <OrthographicCamera makeDefault position={[20, 20, 30]} zoom={15} />
    );
  };
  
  export default Camera;