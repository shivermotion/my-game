import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Make sure to import Navigate
import { OptionMenu } from "../scenes/OptionsMenu/OptionMenu";
import { Collection } from "../scenes/Collection/Collection";
import { MainMenu } from "../scenes/MainMenu/MainMenu";
import { NotFound } from "../scenes/NotFound/NotFound";
import { Profile } from "../scenes/Profile/Profile";
import { CapsuleMachineSelection } from "../scenes/CapsuleMachineSelection/CapsuleMachineSelection";
import { MiniGameSelection } from "../scenes/MiniGameSelection/MiniGameSelection";
import { Intro } from "../scenes/IntroVideo/IntroVideo";
import { PrivateLayout } from "../components/layouts/Private/Private";
import "../globals/globals.css"
import 'font-awesome/css/font-awesome.min.css';
import { LoginPortal } from "../scenes/LoginPortal/LoginPortal";



export const RootNavigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPortal />} /> {/* Login portal at root path */}
      <Route path="/intro" element={<Intro />} />
      {/* PrivateLayout */}
      <Route path="/" element={<PrivateLayout />}>
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/options" element={<OptionMenu />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/capsule" element={<CapsuleMachineSelection />} />
        <Route path="/minigames" element={<MiniGameSelection />} />
      </Route>
      <Route path="*" element={<NotFound />} /> {/* 404 page */}
    </Routes>
  );
};

