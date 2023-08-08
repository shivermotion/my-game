import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { WiggleButton } from '../WiggleButton/WiggleButton';


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

  return (
    <div className='w-full h-full flex  '>
      <div className='w-3/4 h-full m-4 animate-jump  '>
      <Slider {...settings}>
          {machines.map((machine, index) => (
            <div key={index} className="h-[80vh] w-full flex items-center justify-center overflow-hidden rounded-3xl hover:cursor-pointer">
              <img className="w-full h-[80%] object-contain" src={`${machine.imageFile}`} alt={`carousel ${index + 1}`} />
              <div className="w-full h-[20%] flex items-center justify-center ">
              <WiggleButton  text={"SELECT"} />
              </div>
            </div>
          ))}
        </Slider>
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
  );
};
