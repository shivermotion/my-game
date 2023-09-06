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
        <div className="flex flex-col items-center justify-center h-screen">
          <SpinningRectangle onClick={() => setSelectedGame(<Game />)} />
          <iframe style={{ width:"800px", height:"600px"}} src="http://tridiv.com/app/index.html?dmlldz1mdWxsJmRvYz17InNldHRpbmdzIjp7Im5hbWUiOiJjYXBzdWxlTWFjaGluZSIsImxpZ2h0Ijoibm9uZSIsInNoYWRlIjoiLjMiLCJ0aW50IjoiLjE1IiwiYm9yZGVyIjoiMC4zNCIsImJnIjoiI2ZmZmZmZiIsInNuYXAiOiJvbiIsIm1hdGNoIjowLjUsInpvb20iOiIxMDAifSwic2hhcGVzIjpbeyJ0eXBlIjoiY3Vib2lkIiwieSI6LTUsInoiOjAuNSwidyI6Ni42MjUsImgiOjYuOTEwNzE0Mjg1NzE0Mjg1LCJkIjo2LjM3NSwiY0FsbCI6IiNmYjJlMDEiLCJuYW1lIjoiY3ViLTEifSx7InR5cGUiOiJjdWJvaWQiLCJ4IjoyLjUsInkiOjIuNSwieiI6MywidyI6MS4zNzUsImgiOjguNSwiZCI6MS4yNSwiY0FsbCI6IiNlMWUxZTEiLCJuYW1lIjoiY3ViLTMifSx7InR5cGUiOiJjdWJvaWQiLCJ4IjoyLjUsInkiOjIuNSwieiI6LTIsInciOjEuNSwiaCI6OC4zNzUsImQiOjEuMjUsImNBbGwiOiIjZTFlMWUxIiwibmFtZSI6ImN1Yi00In0seyJ0eXBlIjoiY3Vib2lkIiwieCI6LTIuNSwieSI6Mi41LCJ6IjotMiwidyI6MS41LCJoIjo4LjM3NSwiZCI6MS4yNSwiY0FsbCI6IiNlMWUxZTEiLCJuYW1lIjoiY3ViLTUifSx7InR5cGUiOiJjdWJvaWQiLCJ4IjotMi41LCJ5IjoyLjUsInoiOjMsInciOjEuNSwiaCI6OC4zNzUsImQiOjEuMjUsImNBbGwiOiIjZTFlMWUxIiwibmFtZSI6ImN1Yi02In0seyJ0eXBlIjoiY3Vib2lkIiwieSI6LTQuNSwieiI6Mi41LCJ3IjozLjE0Mjg1NzE0Mjg1NzE0MzIsImgiOjIuNzE0Mjg1NzE0Mjg1NzE1MywiZCI6My43MTQyODU3MTQyODU3MTM1LCJjQWxsIjoiI2UxZTFlMSIsIm5hbWUiOiJjdWItMiJ9LHsidHlwZSI6ImN5bGluZGVyIiwieSI6LTQuNSwieiI6NCwiZGlhbWV0ZXIiOjEuNDI4NTcxNDI4NTcxNDI3LCJoIjoxLjcxNDI4NTcxNDI4NTcxNTMsInJ4IjotOTAsImNBbGwiOiIjZTFlMWUxIiwibmFtZSI6ImN5bC0xIn0seyJ0eXBlIjoiY3Vib2lkIiwieSI6LTE2LCJ6IjowLjUsInciOjYuNjI1LCJoIjoxLjMzOTI4NTcxNDI4NTcwODIsImQiOjYuOTQ2NDI4NTcxNDI4NTcyLCJjQWxsIjoiI2ZiMmUwMSIsIm5hbWUiOiJjdWItOCJ9LHsidHlwZSI6ImN1Ym9pZCIsInkiOi0xMiwieiI6MC41LCJ3Ijo2LjkxMDcxNDI4NTcxNDI4NSwiaCI6Ni4wNTM1NzE0Mjg1NzE0MjgsImQiOjYuMzc1LCJyeiI6LTkwLCJvIjoiMSIsImNBbGwiOiIjOWRlYWY0IiwibmFtZSI6ImN1Yi03In1dfQ==" title="machine"></iframe>
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
