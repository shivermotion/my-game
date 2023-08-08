import React from "react";
import { ProfileContainer } from "./ProfileContainer/ProfileContainer";
import { Background } from "../MainMenu/Background/Background";

export const Profile: React.FC = () => {
  return (
    <>
    <Background />
    <div>
      <h1 className=" justify-center flex shadow-lg p-4 rounded-3xl bg-[#FED7AA] m-8 border-2 border-orange-600   ">Profile Screen</h1>
      <ProfileContainer />
    </div>
    </>
  );
}
