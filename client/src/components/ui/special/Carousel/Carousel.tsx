import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { CoinHolder } from '../CoinHolder/CoinHolder';
import { LaunchBigConfetti } from '../Confetti/Confetti';
import ModelViewer from '../ModelViewer/ModelViewer';
// import capsuleMachineRed from "../../../../assets/models/mysticForest.glb";
import './Carousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface CapsuleMachine {
  id: number;
  name: string;
  imageFile: string;
  rarity: string;
  cost: number;
  description: string;
  theme: string;
}

interface CarouselProps {
  machines: CapsuleMachine[];
}

export const Carousel: React.FC<CarouselProps> = ({ machines }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleDrop = (e:any) => {
    e.preventDefault();
    const coin = e.dataTransfer.getData('coin');
    if (coin === 'dragged') {
      setShowAnimation(true);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  useEffect(() => {
    let timer1: any;
    let timer2: any;
  
    const handleInput = () => {
      setShowImage(false);
      setShowAnimation(false); // Reset the showAnimation state
      // Remove event listeners to prevent multiple registrations
      window.removeEventListener('click', handleInput);
      window.removeEventListener('keydown', handleInput);
    };
  
    if (showAnimation) {
      timer1 = setTimeout(() => {
        LaunchBigConfetti();
      }, 1500);
  
      timer2 = setTimeout(() => {
        setShowImage(true);
        // Add event listeners for mouse click and keydown
        window.addEventListener('click', handleInput);
        window.addEventListener('keydown', handleInput);
      }, 1500); // Show image 2 seconds after showAnimation is true
    }
  
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      // Remove event listeners when the component unmounts
      window.removeEventListener('click', handleInput);
      window.removeEventListener('keydown', handleInput);
    };
  }, [showAnimation]);
  
  
  

  return (
    <div id='Carousel'>
      <div className='w-full h-full flex'>
        <div className='w-3/4 h-full m-4 animate-jump' onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
          <Slider {...settings}>
            {machines.map((machine, index) => (
              <div key={index} className="h-[70vh] w-full flex items-center justify-center overflow-hidden rounded-3xl ">
                <ModelViewer src={machine.imageFile} alt={'test'} />
              </div>
            ))}
          </Slider>
          <div className="w-full h-[20%] flex items-center justify-center">
            <CoinHolder />
          </div>
          {showAnimation && (
            <div className="animation-container">
              <div className="ball left"></div>
              <div className="ball right"></div>
            </div>
          )}
{showImage && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-black bg-opacity-90 rounded-lg p-4 flex flex-col items-center w-screen h-100% animate-fade">
                <p className="text-4xl font-bold text-white">YOU GOT</p>
      <div className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-pulse w-full">
                <ModelViewer src={machines[currentIndex].imageFile} alt={'test'}  />
        Image Name
      </div>
    </div>
  </div>
)}


        </div>
      <div className='w-1/4 h-grow border-2 border-gray-500 rounded-3xl m-4 bg-opacity-[.5] bg-gray-200 p-4 flex flex-col justify-between animate-fade-left  '>
      <div>
        <p className='text-gray-700 p-4 font-bold text-2xl'>{machines[currentIndex].name.toUpperCase()}</p>
          <p className='text-gray-700 p-4'>{machines[currentIndex].description.toUpperCase()}</p>
          </div>
        <div>
          <p className='text-gray-700 p-4 font-bold'>THEMES: {machines[currentIndex].theme.toUpperCase()}</p>
          <p className='text-gray-700 p-4 font-bold'>RARITY: {machines[currentIndex].rarity.toUpperCase()}</p>
          <p className='text-gray-700 p-4 font-bold'>COST: ${machines[currentIndex].cost}</p>
        </div>
      </div>
    </div>
    </div>
  );
};
