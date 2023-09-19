import React, { useState } from 'react';
import coin from "../../../../assets/images/coin.png"; // Replace with your actual path

export const CoinHolder = () => {
  const [dragging, setDragging] = useState(false);
  const [counters, setCounters] = useState([99, 99, 99]); // Initialize counters for each image

  const handleDragStart = (e:any, index: number) => {
    e.dataTransfer.setData('coin', 'dragged');
    setDragging(true);

    // Decrement the counter for the dragged image
    const newCounters = [...counters];
    newCounters[index] = Math.max(0, newCounters[index] - 1);
    setCounters(newCounters);
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
            className="rounded-md hover:cursor-pointer"
            style={{ width: '200px', height: '200px' }}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}

          />
          <span className="ml-2 text-white font-bold">{counters[index]}</span>
        </div>
      ))}
    </div>
  );
};
