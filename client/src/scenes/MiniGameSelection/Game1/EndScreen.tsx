// src/components/EndScreen.tsx
import React from 'react';

interface EndScreenProps {
  score: number;
  clicks: number;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, clicks }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
      <p className="text-lg">Total Clicks: {clicks}</p>
      <p className="text-lg">Final Score: {score}</p>
    </div>
  );
};

export default EndScreen;
