import React from "react";
import { Background } from "./Background/Background";
import { TitleText } from "./TitleText/TitleText";
import { Button } from "../../components/ui/common/Button";
import { Link } from "react-router-dom";
import ModelViewer from "../../components/ui/special/ModelViewer/ModelViewer";
import earth from "../../assets/models/GlobeCapsuleCompressed.glb"
import "./MainMenu.css";




export const MainMenu = () => {
  return (
    <>
      <Background />
      <TitleText />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <ModelViewer  src={earth} alt="earth"  poster={"/poster.webp"} className="model-viewer-animation"  />
        <Link to="/capsule"><Button text="START" /></Link>
        <Link to="/minigames"><Button text="MINI GAMES" /></Link>
        <Link to="/options"><Button text="OPTIONS"  /></Link>
      </div>
    </>
  );
};


