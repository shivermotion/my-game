import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Globe3D } from './Globe3D/Globe3D';
import { Suspense } from 'react';

function ModelScene() {
  return (
    <Canvas>
      {/* Camera Setup */}
      <perspectiveCamera position={[0, 0, 5]} />
      <OrbitControls />

      {/* Lighting Setup */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={0.7} />

      {/* Your 3D Globe Component */}
      <Suspense fallback={<>Loading...</>}>
      <Globe3D />
      </Suspense>
    </Canvas>
  );
}

export default ModelScene;
