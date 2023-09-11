import React, { useState } from 'react';
import coin from "../../../../assets/images/coin.png"; // Replace with your actual path

export const CoinHolder = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (e:any) => {
    e.dataTransfer.setData('coin', 'dragged');
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return (
    <div 
      className="bg-[#665bac] rounded-full p-2 shadow-lg w-1/2 flex justify-between items-center fixed bottom-0 left-1/4 overflow-visible h-16"
      style={dragging ? { cursor: `url(${coin}), auto` } : {}}
    >
      {[1, 2, 3].map((_, index) => (
        <div className="flex items-center" key={index}>
          <img
            src={coin}
            alt={`coin ${index + 1}`}
            className="rounded-md"
            style={{ width: '200px', height: '200px' }}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
          <span className="ml-2 text-white font-bold">{index + 1}</span>
        </div>
      ))}
    </div>
  );
};
