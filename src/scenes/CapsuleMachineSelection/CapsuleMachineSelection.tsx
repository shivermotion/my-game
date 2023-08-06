import React from "react";
import { Carousel } from "../../components/ui/special/Carousel/Carousel";
import { Background } from "../MainMenu/Background/Background";




export const CapsuleMachineSelection: React.FC = () => {
  const imagesList = [
    "https://i.pinimg.com/originals/0f/6e/0f/0f6e0f0b0b0b0b0b0b0b0b0b0b0b0b0b.jpg",
    "https://i.pinimg.com/originals/0f/6e/0f/0f6e0f0b0b0b0b0b0b0b0b0b0b0b0b0b.jpg",
    "https://i.pinimg.com/originals/0f/6e/0f/0f6e0f0b0b0b0b0b0b0b0b0b0b0b0b0b.jpg",
  ];

  const loremIpsumText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique sollicitudin nibh sit amet consequat. Curabitur vitae consequat dui. Duis elementum orci sed diam consectetur, at volutpat mauris elementum.",
  
    "Maecenas faucibus urna a dolor blandit, id tincidunt nulla vestibulum. Morbi sed ligula rutrum, bibendum risus a, lacinia orci. Fusce a dui a velit rutrum interdum in a enim.",
  
    "Praesent at orci cursus, convallis tellus in, congue mi. Donec rutrum nisi sit amet nisl tristique, eu tincidunt mi fermentum. In sed erat eget eros accumsan facilisis."
  ];
  



  return (
    <>
    <Background/>
    <div>
     <h1 className=" justify-center flex shadow-lg p-4 rounded-3xl bg-[#FED7AA] m-8 border-2 border-orange-600   ">Choose Capsule Machine</h1>
     <Carousel imageList={imagesList} textList={loremIpsumText} />
    </div>
    </>
  );
}