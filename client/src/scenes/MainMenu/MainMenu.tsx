import React, { useEffect, useState } from "react";
import { Background } from "./Background/Background";
import { TitleText } from "./TitleText/TitleText";
import { Button } from "../../components/ui/common/Button";
import { Link, useNavigate } from "react-router-dom";
import moai from '../../assets/models/moai.glb';
import ModelViewer from "../../components/ui/special/ModelViewer/ModelViewer";
import earth from "../../assets/models/GlobeCapsuleCompressed.glb";
import "./MainMenu.css";

export const MainMenu = () => {
  const [isWipeActive, setIsWipeActive] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isWipeActive) {
      setTimeout(() => {
        setShowNewComponent(true);
      }, 1500);

      setTimeout(() => {
        setIsWipeActive(false);
      }, 3000);
      console.log("isWipeActive", isWipeActive);
    }
    console.log("isWipeActive", isWipeActive);
  }, [isWipeActive, navigate]);

  const handleModelClick = () => {
    setIsWipeActive(true);
  };

  return (
    <>
      <Background />
     {!showNewComponent ? <TitleText /> : null} 
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${showNewComponent ? 'hidden' : 'block'} z-10`}>
        <div onClick={handleModelClick}>
          <ModelViewer  
            src={earth} 
            alt="earth"  
            poster={"/poster.webp"} 
            className="model-viewer-animation"  
          />
        </div>
        <Link to="/capsule"><Button text="START"/></Link>
        <Link to="/minigames"><Button text="MINI GAMES"/></Link>
        <Link to="/options"><Button text="OPTIONS"/></Link>
      </div>

      <div className={`${showNewComponent ? 'block' : 'hidden'} `}>
        <div className="flex h-screen w-screen">
          <div className="w-1/4 bg-red-500 items-center justify-center">
            <ModelViewer src={moai} alt={''} />
          </div>
          <div className="w-1/2 bg-blue-500 items-center justify-center">
            <ModelViewer src={moai} alt={''} />
          </div>
          <div className="w-1/4 bg-green-500 items-center justify-center">
            <ModelViewer src={moai} alt={''} />
          </div>
        </div>
      </div>

      <div className={`wipe-transition ${isWipeActive  ? 'active' : ''} z-20`}/>
    </>
  );
};

