import React from 'react';
import handImage from '../../../../assets/images/cartoonhand.png'; // Adjust the path accordingly


const AnimatedHand = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer">
      <img 
        src={handImage} 
        alt="Hand Animation" 
        className="w-[100px] animate-bounce" 
      />
    </div>
  );
};


export default AnimatedHand;
