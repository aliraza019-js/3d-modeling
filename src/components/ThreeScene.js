'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import {PerspectiveCamera } from '@react-three/drei';
import Character from './Character';

const canvasStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

export default function ThreeScene() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Canvas style={canvasStyles}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
        />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <PerspectiveCamera makeDefault position={[0, 1, 3]} />
        <Character url="/G_TCM.glb" />
      </Canvas>
    </div>
  );
}
