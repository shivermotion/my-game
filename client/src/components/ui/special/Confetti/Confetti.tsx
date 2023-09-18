import React from "react";
import confetti from "canvas-confetti";

export const LaunchBasicConfetti = () => {

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
    }, 2000);
 
  }


export const LaunchStarConfetti = () => {
  
  const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  };

  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });


setTimeout(LaunchStarConfetti, 0);
setTimeout(LaunchStarConfetti, 100);
setTimeout(LaunchStarConfetti, 200);

}

export const LaunchBigConfetti = () => {
  const count = 200;
  const defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio: number, opts: { spread: number; startVelocity?: number; decay?: number; scalar?: number; }) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}


export const Fireworks = () => {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
  
  const interval: any = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  
    const particleCount = 50 * (timeLeft / duration);
    const originLeft = { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 };
    const originRight = { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 };
  
    confetti({ ...defaults, particleCount, origin: originLeft });
    confetti({ ...defaults, particleCount, origin: originRight });
  }, 250);
  
}

