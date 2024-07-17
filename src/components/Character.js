// src/app/components/Character.js
'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';

export default function Character({ url }) {
  const group = useRef();
  const { scene } = useGLTF(url);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      scene.scale.set(0.01, 0.01, 0.01);
      scene.position.set(0, -1, 0);
      scene.rotation.y = Math.PI;
      console.log('GLTF model loaded:', scene);
    }
  }, [scene]);

  return scene ? (
    <>
      <primitive ref={group} object={scene} />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
    </>
  ) : null;
}
