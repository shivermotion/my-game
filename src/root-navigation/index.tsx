import React from "react";
import { Route, Routes } from "react-router-dom";
import { OptionMenu } from "../scenes/OptionMenu";
import { Collection } from "../scenes/Collection";
import { MainMenu } from "../scenes/MainMenu";
import { NotFound } from "../scenes/NotFound";

export const RootNavigation: React.FC = () => {


  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/level-one" element={<OptionMenu />} />
      <Route path="/level-two" element={<Collection />} />
      <Route path="*" element={<NotFound />} /> {/* 404 page */}
    </Routes>
  );
}
