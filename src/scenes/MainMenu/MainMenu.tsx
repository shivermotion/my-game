import React from "react";
import {Background} from "./Background/Background";
import {TitleText} from "./TitleText/TitleText";


 export const MainMenu = () => {
  return (
    <div className="relative">
      <Background />
      <TitleText />
    </div>
  );
};

export default MainMenu;
