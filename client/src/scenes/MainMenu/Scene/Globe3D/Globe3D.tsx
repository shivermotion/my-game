import React from 'react';
import {  useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export const Globe3D = () => {
  const gltf = useLoader(GLTFLoader, '/GlobeCapsule.glb');

  return (
    <mesh>
      <primitive object={gltf.scene} />
    </mesh>
  );
};
