import React from 'react';
import ModelViewer from '../../components/ui/special/ModelViewer/ModelViewer';
import moai from '../../assets/models/moai.glb';

export const World = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* Left Section: Red, 1/4 of screen */}
      <div className="w-1/4 bg-red-500 flex items-center justify-center">
        <ModelViewer src={moai} alt={''} />
      </div>

      {/* Middle Section: Blue, 2/4 of screen */}
      <div className="w-1/2 bg-blue-500 flex items-center justify-center">
        {/* ModelViewer instance in the middle section */}
        <ModelViewer src={moai} alt={''} />
      </div>

      {/* Right Section: Green, 1/4 of screen */}
      <div className="w-1/4 bg-green-500 flex items-center justify-center">
        {/* ModelViewer instance in the right section */}
        <ModelViewer src={moai} alt={''} />
      </div>
    </div>
  );
};

export default World;
