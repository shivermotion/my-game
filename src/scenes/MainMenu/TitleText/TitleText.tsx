import React, { useState } from 'react';

export const TitleText: React.FC = () => {
  // Predefined animations using Tailwind CSS
  const animations = [
    ' animate-spin transform transition-transform duration-500 ease-in-out hover:scale-150 hover:-rotate-50 text-red-500', // Animation 1
    'transform transition-transform duration-500 ease-in-out hover:scale-100 hover:rotate-6 text-emerald-500',  // Animation 2
    'animate-bounce transform transition-transform duration-500 ease-in-out hover:scale-300 hover:rotate-30 text-blue-600',  // Animation 3
    'wiggle transform transition-transform duration-500 ease-in-out hover:scale-500 hover:rotate-180 text-yellow-500',  // Animation 4
    'animate-pulse transform transition-transform duration-500 ease-in-out hover:scale-200 hover:rotate-90 text-pink-500',  // Animation 5
    'animate-ping transform transition-transform duration-500 ease-in-out hover:scale-400 hover:rotate-120 text-purple-500',  // Animation 6
    'animate-pulse transform transition-transform duration-500 ease-in-out hover:scale-600 hover:rotate-150 text-indigo-500',  // Animation 7
    'animate-bounce transform transition-transform duration-500 ease-in-out hover:scale-700 hover:rotate-240 text-green-500',  // Animation 8
    ' text-black',  // Animation 9
    'animate-ping transform transition-transform duration-500 ease-in-out hover:scale-900 hover:rotate-360 text-red-500',  // Animation 10
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
