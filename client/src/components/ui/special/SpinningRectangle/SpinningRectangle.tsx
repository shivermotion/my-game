import React from "react";
import "./SpinningRectangle.css";



const SpinningRectangle = ({ onClick }: {onClick?: () => void;}) => {
  return (
    <div id="SpinningRectangle">
      <div  className="container " onClick={onClick}>
      <div className="cuboid animate-rotate-y animate-infinite animate-duration-[10000ms] hover:cursor-pointer hover:animate-wiggle">
       <div className="face frontSide"></div>
       <div className="face backSide"></div>
       {/* <div className="face topSide"></div> */}
       {/* <div className="face bottomSide">Bottom</div> */}
       <div className="face rightSide"></div>
       <div className="face leftSide"></div>
      </div>
    </div>
  </div>
);
}

export default SpinningRectangle;
