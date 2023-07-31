import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Make sure to import Navigate
import { OptionMenu } from "../scenes/OptionMenu";
import { Collection } from "../scenes/Collection/Collection";
import { MainMenu } from "../scenes/MainMenu/MainMenu";
import { NotFound } from "../scenes/NotFound";
import { Profile } from "../scenes/Profile";
import { CapsuleMachineSelection } from "../scenes/CapsuleMachineSelection/CapsuleMachineSelection";
import { MiniGameSelection } from "../scenes/MiniGameSelection";
import { Intro } from "../scenes/IntroVideo/IntroVideo";
import "../globals/globals.css"


export const RootNavigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/intro" replace />} />
      <Route path="/intro" element={<Intro />} /> {/* Add this line */}
      <Route path="/main-menu" element={<MainMenu />} />
      <Route path="/options" element={<OptionMenu />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/capsule" element={<CapsuleMachineSelection />} />
      <Route path="/minigames" element={<MiniGameSelection />} />
      <Route path="*" element={<NotFound />} /> {/* 404 page */}
    </Routes>
  );
};
