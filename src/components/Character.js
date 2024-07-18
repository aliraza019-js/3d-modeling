'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';

export default function Character({ url, secondUrl }) {
  console.log('secondUrl', secondUrl)
  const group = useRef();
  const sceneOne = useGLTF(url);
  const sceneTwo = useGLTF(secondUrl);
  var sceneOneBody = sceneOne.scene
  var sceneTwoShirt = sceneTwo.scene

  console.log('sceneTwo', sceneTwo.scene)
  console.log('scene useGLTF', sceneOne)

  useEffect(() => {

    if (sceneTwoShirt) {
      sceneTwoShirt.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      sceneTwoShirt.scale.set(0.01, 0.01, 0.01);
      sceneTwoShirt.position.set(0, -1, 0);
      sceneTwoShirt.rotation.y = Math.PI;
      sceneTwoShirt.rotation.x = 0;
      // sceneTwoShirt.rotateOnAxis(0,0)
      console.log('GLTF model sceneTwoShirt loaded:', sceneTwoShirt.rotateOnAxis);
    }
    if (sceneOneBody) {
      sceneOneBody.traverse((child) => {
        console.log('child', child)
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      sceneOneBody.scale.set(0.01, 0.01, 0.01);
      sceneOneBody.position.set(0, -1, 0);
      sceneOneBody.rotation.y = Math.PI;
      sceneOneBody.rotation.x = 0;
      // sceneOneBody.rotateOnAxis(0,0)
      console.log('GLTF sceneOneBody loaded:', sceneOneBody);
    }
  }, [sceneOneBody]);

  return (
    <>
      <primitive ref={group} object={sceneOne.scene} />
      <primitive ref={group} object={sceneTwo.scene} />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4} minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI/ 6} />
    </>
  );
}
