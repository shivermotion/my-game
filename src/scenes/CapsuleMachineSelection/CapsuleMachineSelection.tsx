import React, { useEffect, useState } from "react";
import { Carousel } from "../../components/ui/special/Carousel/Carousel";
import { Background } from "../MainMenu/Background/Background";
import machine1 from '../../assets/images/machine1.png';
import machine2 from '../../assets/images/machine2.png';
import machine3 from '../../assets/images/machine2.png';
import AnimatedHand from "../../components/ui/special/AnimatedHand/AnimatedHand";






export const CapsuleMachineSelection: React.FC = () => {
  const [showHand, setShowHand] = useState(true);
  const imagesList = [machine1, machine2, machine3];
  const loremIpsumText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique sollicitudin nibh sit amet consequat. Curabitur vitae consequat dui. Duis elementum orci sed diam consectetur, at volutpat mauris elementum.",
    "Maecenas faucibus urna a dolor blandit, id tincidunt nulla vestibulum. Morbi sed ligula rutrum, bibendum risus a, lacinia orci. Fusce a dui a velit rutrum interdum in a enim.",
    "Praesent at orci cursus, convallis tellus in, congue mi. Donec rutrum nisi sit amet nisl tristique, eu tincidunt mi fermentum. In sed erat eget eros accumsan facilisis."
  ];
  
  useEffect(() => {
    const handleMouseDown = () => {
      setShowHand(false);
    }
 
    window.addEventListener("mousedown", handleMouseDown);
 
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    }
 }, []);
 
  



  return (
    <>
    <Background/>
    <div className="relative"> {/* Ensures the hand is positioned relative to this container */}
      <h1 className="justify-center flex shadow-lg p-4 rounded-3xl bg-[#FED7AA] m-8 border-2 border-orange-600">Choose Capsule Machine</h1>
      <Carousel imageList={imagesList} textList={loremIpsumText} />
      {showHand && <AnimatedHand />}
    </div>
    </>
  );
}