import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


export const QTEGame: React.FC = () => {
  const qteSequence = ['a', 's', 'd', 'w'];
  const qteDuration = 3000; // 3 seconds
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [qteIndex, setQTEIndex] = useState(0);
  const [userInput, setUserInput] = useState('');

   // Set the App element for react-modal
   useEffect(() => {
    Modal.setAppElement('#root'); // Assuming your root element has the id 'root'
  }, []);

  useEffect(() => {
    if (!gameOver) {
      const timer = setTimeout(() => {
        setGameOver(true);
      }, qteDuration);
      return () => clearTimeout(timer);
    }
  }, [gameOver]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (!gameOver) {
      const keyPressed = event.key;
      setUserInput(keyPressed); // Track user's input
      if (keyPressed === qteSequence[qteIndex]) {
        setScore(score + 100);
        setQTEIndex(qteIndex + 1);
        if (qteIndex === qteSequence.length - 1) {
          setGameOver(true);
        }
      } else {
        setGameOver(true);
      }
    }
  };

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setQTEIndex(0);
    setUserInput('');
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold">QTE Mini-Game</h1>
      <div
        className="qte-box"
        onKeyDown={handleKeyPress}
        tabIndex={0} // Ensure the container can receive focus
      >
        <p className="text-2xl font-bold">Press: {qteSequence[qteIndex]}</p>
        <p className="text-2xl font-bold">You Pressed: {userInput}</p>
        {qteSequence.map((key, index) => (
          <span key={index} className="text-5xl font-bold">
            {index === qteIndex ? <span className="text-contrast">{key}</span> : key}
          </span>
        ))}
      </div>
      <div>
        <p className="score">Score: {score}</p>
        {gameOver && (
          <p className="game-over">Game Over! Your Score: {score}</p>
        )}
      </div>
      <button
        className="qte-button"
        onClick={startGame}
        disabled={!gameOver && qteIndex < qteSequence.length}
      >
        Start Game
      </button>
    </div>
  );
};


