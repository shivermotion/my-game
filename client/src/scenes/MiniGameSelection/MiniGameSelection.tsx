import React, { useState } from "react";
import SpinningRectangle from "../../components/ui/special/SpinningRectangle/SpinningRectangle";
import Game from "./JTEBoxing/JTEBoxing"; // Import the component directly



export const MiniGameSelection: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<React.ReactNode | null>(null);

  // Function to go back to game selection
  const goBackToSelection = () => {
    setSelectedGame(null);
  };

  return (
    <div>
      <h1 className="justify-center flex shadow-lg p-4 rounded-3xl bg-[#FED7AA] m-8 border-2 border-orange-600">
        MiniGameSelection
      </h1>
      {selectedGame === null ? (
        <div className="flex flex-col items-center justify-center h-screen ">
          <SpinningRectangle  onClick={() => setSelectedGame(<Game />)} />
        </div>
      ) : (
        <div>
          {/* Add a back button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={goBackToSelection}
          >
            Back to Game Selection
          </button>
          {selectedGame}
        </div>
      
      )}
    </div>
  );
};
