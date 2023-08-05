import React from "react";
import { Background } from "./Background/Background";
import { TitleText } from "./TitleText/TitleText";
import { Button } from "../../components/ui/common/Button";
import { Link } from "react-router-dom";



export const MainMenu = () => {
  return (
    <>
      <Background />
      <TitleText />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link to="/"> <Button text="START" /> </Link>
        <Link to="/options"> <Button text="OPTIONS" /> </Link>
      </div>
    </>
  );
};

export default MainMenu;
