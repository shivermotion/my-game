import React, { useState } from 'react';

export const TitleText: React.FC = () => {
  // Predefined animations using Tailwind CSS
  const animations = [
    'transform transition-transform duration-500 ease-in-out hover:scale-150 hover:-rotate-12', // Animation 1
    'transform transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-6',  // Animation 2
    'transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3',  // Animation 3
  ];

  const title = "GACHAWORLD";
  const [assignedAnimations, setAssignedAnimations] = useState<string[]>(new Array(title.length).fill(''));

  const handleClick = (index: number) => {
    const newAssignedAnimations = [...assignedAnimations];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    newAssignedAnimations[index] = randomAnimation;
    setAssignedAnimations(newAssignedAnimations);
  };

  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-2 cursor-pointer">
      {title.split('').map((char, index) => (
        <span
          key={index}
          className={`text-6xl ${assignedAnimations[index]}`}
          onClick={() => handleClick(index)}
        >
          {char}
        </span>
      ))}
    </div>
  );
};
