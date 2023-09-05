import React, { useEffect, useState } from 'react';
import Mole from './Mole';
import EndScreen from './EndScreen';

const Game: React.FC = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [moles, setMoles] = useState<{ isGold: boolean; isActive: boolean }[]>(
    Array(9 * 9).fill({ isGold: false, isActive: false })
  );

  useEffect(() => {
    // Start the game interval when the component mounts
    const gameInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 81); // 9x9 grid
      const newMoles = [...moles];
      newMoles[randomIndex] = {
        isGold: Math.random() < 0.2, // 20% chance for a gold mole
        isActive: true,
      };
      setMoles(newMoles);

      setTimeout(() => {
        newMoles[randomIndex] = {
          isGold: false,
          isActive: false,
        };
        setMoles(newMoles);
      }, 1000);
    }, 1500);

    // Start the timer interval when the component mounts
    const timeInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    // Clear both intervals when the component unmounts
    return () => {
      clearInterval(gameInterval);
      clearInterval(timeInterval);
    };
  }, [moles, timeLeft]); // Empty dependency array to run this effect once on mount

  const handleMoleClick = (index: number, isGold: boolean, isActive: boolean) => {
    if (isActive) {
      const increment = isGold ? 500 : 100;
      setScore(score + increment);

      const newMoles = [...moles];
      newMoles[index] = {
        isGold: false,
        isActive: false,
      };
      setMoles(newMoles);
    }
  };
  
  return (
    <div className="text-center">
      {timeLeft === 0 ? <EndScreen score={score} clicks={0} /> :
        <>
          <h1 className="text-4xl font-bold mb-4">Whack-a-Mole</h1><div className="grid grid-cols-9 gap-2 mx-auto mb-4">
          {moles.map((mole, index) => (
            <Mole
              key={index}
              isGold={mole.isGold}
              isActive={mole.isActive}
              onMoleClick={() => handleMoleClick(index, mole.isGold, mole.isActive)} />
          ))}
          </div>
          <p className="text-lg mb-2">Time Left: {timeLeft} seconds</p><p className="text-lg">Score: {score}</p>
        </>
      }
      </div>
    

  );
};

export default Game;
