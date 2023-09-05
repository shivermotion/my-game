// src/components/Mole.tsx
import React, { useState, useEffect } from 'react';
import hole from '../../../assets/images/hole.png';
import mole from '../../../assets/images/mole.png';
import "./Mole.css"

interface MoleProps {
  isGold: boolean;
  isActive: boolean;
  onMoleClick: () => void;
}

const Mole: React.FC<MoleProps> = ({ isGold, isActive, onMoleClick }) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isActive) {
      // When the mole becomes active, add the slide-up animation class
      setAnimationClass('animate-slide-up');
    } else {
      // When the mole becomes inactive, remove the animation class after the animation completes
      setTimeout(() => setAnimationClass(''), 500); // 500ms is the duration of the slide-up animation
    }
  }, [isActive]);

  return (
    <div
      className={`relative w-12 h-12 rounded-full cursor-pointer overflow-hidden ${animationClass}`}
      onClick={isActive ? onMoleClick : undefined}
      style={{
        backgroundImage: `url(${hole})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <img
          src={isGold ? mole : mole}
          alt="Mole"
          className="w-12 h-12 object-cover"
        />
      </div>
    </div>
  );
};

export default Mole;
