import React from 'react';
import RedSquare from "./RedSquare"

const JTEBoxingGame = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold py-4">JTE Boxing</h1>
      <div className="flex justify-between py-2">
        <div className="border p-2">
          <p>Current Score</p>
          {/* Display current score value */}
        </div>
        <div className="border p-2">
          <p>Hi Score</p>
          {/* Display high score value */}
        </div>
        <div className="border p-2">
          <p>Last Score</p>
          {/* Display last score value */}
        </div>
      </div>
      <div className="game-section flex">
        {/* Render your animated 3D cuboids here */}
  <RedSquare />
  <RedSquare />
  <RedSquare />
      </div>
    </div>
  );
};

export default JTEBoxingGame;
