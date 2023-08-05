import React from 'react';
import avatar from "../../../assets/images/avatar.png";

export const ProfileCard = ({description}: {description : string}) => {
  return (
    <div className="max-w-sm bg-[#E0E7FF] rounded-lg shadow-lg p-4 ">
      <div className="flex justify-between">
        <img
          src={avatar} // Replace with the actual avatar URL
          alt="Avatar"
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold">Username</span>
          <span className="text-sm text-gray-600">Rank: Gold</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-sm text-gray-600">{description}</span>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <span className="text-sm font-bold">Location:</span>
          <span className="text-sm text-gray-600"> Country</span>
        </div>
        <div>
          <span className="text-sm font-bold">Gachapon Collected:</span>
          <span className="text-sm text-gray-600"> 500</span>
        </div>
      </div>
    </div>
  );
};


