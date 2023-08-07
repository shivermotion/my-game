import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AnimatedHand from '../AnimatedHand/AnimatedHand';

interface CarouselProps {
  imageList: string[];
  textList: string[];
}

export const Carousel: React.FC<CarouselProps> = ({imageList, textList}) => {
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
    <div className='w-full h-full flex '>
      <div className='w-3/4 h-full m-4 '>
        <Slider {...settings}>
          {imageList.map((imageUrl, index) => (
            <div key={index} className="h-[80vh] w-full flex items-center justify-center overflow-hidden rounded-3xl hover:cursor-pointer  ">
              <img className="w-full h-full object-contain" src={imageUrl} alt={`carousel ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-1/4 h-grow border-2 border-gray-500 rounded-3xl m-4 bg-opacity-[.5] bg-gray-200 p-4 flex flex-col justify-between'>
        <p className='text-gray-700'>{textList[currentIndex]}</p>
        <div>
        <p className='text-gray-700 p-4'>Themes:</p>
        <p className='text-gray-700 p-4'>Rarity:</p>
        <p className='text-gray-700 p-4'>Cost:</p>
        </div>

      </div>
    </div>
  );
};
