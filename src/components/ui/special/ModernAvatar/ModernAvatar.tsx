import React from "react";

interface ModernAvatarProps {
  avatar: string;
}

export const ModernAvatar: React.FC<ModernAvatarProps> = ({ avatar }) => {
  return (
    <div className="relative inline-block w-12 h-12">
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
      <img
        src={avatar}
        className="rounded-full w-12 h-12 object-cover hover:transition-all duration-1000 ease-in-out hover:scale-125"
        alt="avatar"
      />
    </div>
  );
};
