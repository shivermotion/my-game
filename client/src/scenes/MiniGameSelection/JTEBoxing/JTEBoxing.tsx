import React, { useState, useEffect } from 'react';
import beep from "../../../assets/sounds/qte-beep-sequence.mp3"
import success from '../../../assets/sounds/qte-success.mp3'
import fail from '../../../assets/sounds/qte-fail.mp3'
import letsgo from '../../../assets/sounds/letsgo.mp3'
// import letsplayagain from '../../../assets/sounds/letsplayagain.mp3'
import ready from '../../../assets/sounds/ready.mp3'

const QTEGame = () => {
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [currentInput, setCurrentInput] = useState('');
  const [targetInput, setTargetInput] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [successCount, setSuccessCount] = useState(0);
  const [intro, setIntro] = useState<string | null>('Ready?');
  const [showGame, setShowGame] = useState(false);
  const readySound = new Audio(ready);
  const goSound = new Audio(letsgo);


  const validInputs = ['A', 'S', 'W', 'D'];

  const generateInput = () => {
    const randomIndex = Math.floor(Math.random() * validInputs.length);
    setTargetInput(validInputs[randomIndex]);
  
    // Play the sound
    const audio = new Audio(beep);
    audio.play();
  };
  

  // useEffect(() => {
  //   generateInput();
  // }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        // If the game is over, don't register any more keypresses
  if (gameOver) {
    return;
  }
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
  
    if (countdown > 0 && !gameOver && showGame) {  // Add showGame condition here
      timer = setTimeout(() => {
        setCountdown(countdown - 0.1);
      }, 100);
    } else if (countdown <= 0) {
      setGameOver(true);
      // Play the wrong input sound
      const gameOverAudio = new Audio(fail);
      gameOverAudio.play();
    }
  
    return () => clearTimeout(timer);
  }, [countdown, gameOver, showGame]);  // Add showGame as a dependency
  

  useEffect(() => {
    readySound.play();
    const readyTimer = setTimeout(() => {
      setIntro('Go!');
      goSound.play();
      const goTimer = setTimeout(() => {
        setIntro(null);
        setShowGame(true);  // Show the game
        generateInput();  // Generate the input here
      }, 1000); // Show "Go!" for 1 second
      return () => clearTimeout(goTimer);
    }, 2000); // Show "Ready?" for 2 seconds
    return () => clearTimeout(readyTimer);
  }, []);
  
  
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {intro && (
        <div className="intro-container">
          <h1 className="text-4xl">{intro}</h1>
        </div>
      )}
      {showGame && (
        <>
          <h1 className="text-4xl mb-4">Quick Timer Event Game</h1>
          <button className="mb-4" onClick={generateInput}>Start Game</button>
          <div className="flex space-x-4 mb-4">
            <div className="border p-4">
              <h2 className="text-2xl">Current Score</h2>
              <p>{score}</p>
            </div>
            <div className="border p-4">
              <h2 className="text-2xl">Hi Score</h2>
              <p>/* Your hi score logic here */</p>
            </div>
            <div className="border p-4">
              <h2 className="text-2xl">Last Score</h2>
              <p>/* Your last score logic here */</p>
            </div>
          </div>
          <h2 className="text-2xl mb-4">Time Left: {countdown.toFixed(1)}</h2>
          <div className={targetInput === 'W' ? "flex flex-col justify-center items-center  rounded-full w-48 h-48 bg-blue-500" : targetInput === 'S' ? "flex flex-col justify-center items-center  rounded-full w-48 h-48 bg-red-500" : targetInput === 'A' ? "flex flex-col justify-center items-center  rounded-full w-48 h-48 bg-green-500": "flex flex-col justify-center items-center  rounded-full w-48 h-48 bg-yellow-500"}>
            <span className="text-white text-9xl animate-pulse animate-duration-200 p-4 flex-col">{targetInput}</span>
          </div>
          {gameOver && <h2 className="text-2xl text-red-500 mt-4">Game Over</h2>}
        </>
      )}
    </div>
  );
}
  
  

export default QTEGame;
