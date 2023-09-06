import React, { useState, useEffect } from 'react';
import beep from "../../../assets/sounds/qte-beep-sequence.mp3"
import success from '../../../assets/sounds/qte-success.mp3'
import fail from '../../../assets/sounds/qte-fail.mp3'

const QTEGame = () => {
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [currentInput, setCurrentInput] = useState('');
  const [targetInput, setTargetInput] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [successCount, setSuccessCount] = useState(0);

  const validInputs = ['A', 'S', 'W', 'D'];

  const generateInput = () => {
    const randomIndex = Math.floor(Math.random() * validInputs.length);
    setTargetInput(validInputs[randomIndex]);
  
    // Play the sound
    const audio = new Audio(beep);
    audio.play();
  };
  

  useEffect(() => {
    generateInput();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keyPressed = e.key.toUpperCase();

      if (validInputs.includes(keyPressed)) {
        setCurrentInput(keyPressed);

        if (keyPressed === targetInput) {
          const bonus = 100 * countdown;
          setScore(prevScore => prevScore + 100 + bonus);
          setSuccessCount(prevSuccessCount => prevSuccessCount + 1);
          // Play the correct input sound
          const correctAudio = new Audio(success);
          correctAudio.play();

          if (successCount !== 0 && successCount % 30 === 0) {
            setCountdown(prevCountdown => prevCountdown - 0.3);
          }

          generateInput();
          setCountdown(3);
        } else {
          setGameOver(true);
          // Play the wrong input sound
          const wrongAudio = new Audio(fail);
          wrongAudio.play();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [targetInput, countdown, successCount]);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (countdown > 0 && !gameOver) {
      timer = setTimeout(() => {
        setCountdown(countdown - 0.1);
      }, 100);
    } else if (countdown <= 0) {
      setGameOver(true);
    }

    return () => clearTimeout(timer);
  }, [countdown, gameOver]);

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl mb-4">Quick Timer Event Game</h1>
      <button onClick={generateInput}>Start Game</button>
      <div>
        <h2 className="text-2xl">Score: {score}</h2>
        <h2 className="text-2xl">Time Left: {countdown.toFixed(1)}</h2>
        <h2 className="text-2xl">Input: {targetInput}</h2>
      </div>
      {gameOver && <h2 className="text-2xl text-red-500">Game Over</h2>}
    </div>
  );
};

export default QTEGame;
