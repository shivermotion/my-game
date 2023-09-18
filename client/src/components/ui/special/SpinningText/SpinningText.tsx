import React, { useEffect } from 'react';
import './SpinningText.css';

const SpinningText = () => {
  useEffect(() => {
    const circle = document.getElementById('circle');
    const text = document.getElementById('text');

    if (!circle || !text) return;

    const radius = circle.offsetWidth / .75;
    const textContent = text.textContent;

    if (!textContent) return;

    const textLength = textContent.length;
    let angle = 0;
    const angleIncrement = 360 / textLength;

    text.textContent = ''; // Clear the text

    for (let i = 0; i < textLength; i++) {
      const char = document.createElement('span');
      char.textContent = textContent[i];
      char.style.position = 'absolute';
      char.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
      text.appendChild(char);
      angle += angleIncrement;
    }
  }, []);

  return (
    <div className="App">
      <div className="circle " id="circle">
        <div className="text animate-jump-in animate-infinite animate-duration-[15000ms] animate-ease-in-out animate-normal animate-fill-both" id="text">⭐GACHA⭐WORLD</div>
      </div>
    </div>
  );
};

export default SpinningText;