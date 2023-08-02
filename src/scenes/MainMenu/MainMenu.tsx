import React from "react";
import { Background } from "./Background/Background";
import { TitleText } from "./TitleText/TitleText";
import { Button } from "../../components/ui/common/Button";
import { WiggleButton } from "../../components/ui/special/WiggleButton/WiggleButton";
import ModelScene from "./Scene/Scene";


export const MainMenu = () => {
  return (
    <>
      <Background />
      <TitleText />
     
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-3/4">
        <WiggleButton />
      </div>
    </>
  );
};

export default MainMenu;
