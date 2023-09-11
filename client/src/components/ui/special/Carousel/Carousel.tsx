import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { CoinHolder } from '../CoinHolder/CoinHolder';
import { LaunchBigConfetti } from '../Confetti/Confetti';
import ModelViewer from '../ModelViewer/ModelViewer';
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
    let timer:any;
    if (showAnimation) {
      setTimeout(() => {
        LaunchBigConfetti();
      }, 1500);
      timer = setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
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
