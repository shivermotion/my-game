import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { WiggleButton } from '../WiggleButton/WiggleButton';
import { LaunchBigConfetti } from '../Confetti/Confetti';
import { CapsuleMachineBlue } from '../CapsuleMachineBlue/CapsuleMachineBlue';
import './Carousel.css';



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

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    setShowAnimation(true);
    console.log("button clicked");
    console.log(showAnimation)
  };
  

  const handleContainerClick = () => {
    setShowAnimation(false);
    console.log("button clicked");
    console.log(showAnimation)
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
    let timer: string | number | NodeJS.Timeout | undefined;
    if (showAnimation) {
      setTimeout(() => {
          LaunchBigConfetti();
      }
      , 1500);
      timer = setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
    }
    // } else if (showAnimation && gachapon === "ultra rare") {
 //   LaunchStarConfetti();
 // } else if (showAnimation && gachapon === "common" || "uncommon" || "rare") {
 //   LaunchBasicConfetti();
    return () => {
      // Cleanup timer if the component is unmounted
      clearTimeout(timer);
     
    };
  }, [showAnimation]);
  


  return (
    <div id='Carousel'>
    <div className='w-full h-full flex' onClick={handleContainerClick}  >
      <div className='w-3/4 h-full m-4 animate-jump  '>
      <Slider {...settings}>
          {machines.map((machine, index) => (
            <div key={index} className="h-[80vh] w-full flex items-center justify-center overflow-hidden rounded-3xl hover:cursor-pointer">
              {/* <img className="w-full h-[80%] object-contain" src={`${machine.imageFile}`} alt={`carousel ${index + 1}`} /> */}
              <CapsuleMachineBlue  />

              <div className="w-full h-[20%] flex items-center justify-center ">
              <WiggleButton onClick={(e) => handleButtonClick(e)} text={"SELECT"} />
              </div>
            
            </div>
          ))}
        </Slider>
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
