import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
      <div className='w-3/4 h-full'>
        <Slider {...settings}>
          {imageList.map((imageUrl, index) => (
            <div key={index} className="h-[80vh] w-full flex items-center justify-center overflow-hidden">
              <img className="w-full h-full object-cover" src={imageUrl} alt={`carousel ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-1/4 h-grow bg-gray-200 p-4'>
        <p className='text-gray-700'>{textList[currentIndex]}</p>
        <p className='text-gray-700 p-4'>Themes:</p>
        <p className='text-gray-700 p-4'>Rarity:</p>
        <p className='text-gray-700 p-4'>Cost:</p>

      </div>
    </div>
  );
};
