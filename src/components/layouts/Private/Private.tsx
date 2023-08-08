import React from "react";
import { Outlet } from "react-router-dom";
import  PrivateNavigation  from "../../navbars/Private/Private";

export const PrivateLayout: React.FC = () => {

  return (
    <div>
      <div>
        <PrivateNavigation />
      </div>
      <div>
        <Outlet />
        </div>
    </div>
  );

};