import React, { useEffect, useState } from "react";
import { Carousel } from "../../components/ui/special/Carousel/Carousel";
import { Background } from "../MainMenu/Background/Background";
import AnimatedHand from "../../components/ui/special/AnimatedHand/AnimatedHand";
import capsuleMachineBlue from "../../assets/models/CapsuleMachine.glb"
import capsuleMachineRed from "../../assets/models/CapsuleMachineRed.glb"
import japanMachine from "../../assets/models/JapaneseCapsuleMachine.glb"

export const CapsuleMachineSelection: React.FC = () => {
  const [showHand, setShowHand] = useState(true);

  
  useEffect(() => {
    const handleMouseDown = () => {
      setShowHand(false);
    }
 
    window.addEventListener("mousedown", handleMouseDown);
 
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    }
 }, []);

 const capsuleMachinesMockData = [
  {
    id: 1,
    name: "Galactic Gacha",
    imageFile: capsuleMachineBlue,
    rarity: "Ultra Rare",
    cost: 500,
    description: "Venture into the vastness of space and pull characters from galaxies far and wide. It's said that this machine holds characters from forgotten planets.",
    theme: "Space"
  },
  {
    id: 2,
    name: "Mystic Forest",
    imageFile: capsuleMachineRed,
    rarity: "Rare",
    cost: 300,
    description: "Dive deep into an enchanted forest. The Mystic Forest Gacha grants users magical characters from forgotten folklore tales.",
    theme: "Fantasy"
  },
  {
    id: 3,
    name: "Cybernetic City",
    imageFile: japanMachine,
    rarity: "Common",
    cost: 100,
    description: "Step into a neon-lit cyberpunk future. Extract characters from a world of technology, hackers, and neon lights.",
    theme: "Cyberpunk"
  }
];



  return (
    <>
    <Background/>
    <div className="relative"> {/* Ensures the hand is positioned relative to this container */}
      <h1 className="justify-center flex shadow-lg p-4 rounded-3xl bg-[#FED7AA] m-8 border-2 border-orange-600 font-bold ">
        <div className="animate-bounce animate-delay-[600ms] px-3  ">SELECT </div> 
        <div className="animate-bounce animate-delay-[300ms] px-3 ">CAPSULE</div>
         <div className="animate-bounce px-3 ">MACHINE</div>
         </h1>
      <Carousel machines={capsuleMachinesMockData} />
      {showHand && <AnimatedHand />}
    </div>
    </>
  );
}