import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard,  faCircleHalfStroke, faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const PrivateNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className={`fixed top-0 left-0 bg-black w-24 h-24 rounded-br-full transition-all duration-1000 ease-in-out z-10 ${isOpen ? 'w-72 h-72' : ''}`}>
      <div className="absolute top-0 left-0 w-12 h-12 rounded-full cursor-pointer bg-white z-20 transition-all duration-1000 ease-in-out"
           onClick={() => setIsOpen(!isOpen)}>
        <div className={`absolute w-6 h-1 bg-gray-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`absolute w-6 h-1 bg-gray-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isOpen ? 'rotate-45' : 'translate-y-[-10px]'}`}></div>
        <div className={`absolute w-6 h-1 bg-gray-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isOpen ? 'rotate-[-45deg]' : 'translate-y-[10px]'}`}></div>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 z-10 flex flex-col space-y-4 p-4 h-full w-full">
         <Link to={"collection"}> <button ><FontAwesomeIcon icon={faCircleHalfStroke} className="text-white absolute transform rotate-45 top-[10%] right-[10%] text-6xl hover:animate-spin" /></button></Link>
         <Link to={"profile"}><button><FontAwesomeIcon icon={faAddressCard} className="text-white absolute top-[40%] left-[40%] text-6xl hover:animate-bounce" /></button></Link>
         <Link to={"options"}><button><FontAwesomeIcon icon={faGear} className="text-white absolute transform -rotate-45 top-[65%] left-[5%] text-6xl hover:animate-spin" /></button></Link>
        </div>
      )}
    </div>
  );
};

export default PrivateNavBar;
