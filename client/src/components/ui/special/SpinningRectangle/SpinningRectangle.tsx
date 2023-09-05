import React from "react";
import "./SpinningRectangle.css";



const SpinningRectangle = ({ onClick }: {onClick?: () => void;}) => {
  return (
    <div className="container" onClick={onClick}>
    <div className="cuboid">
      <div className="face frontSide">Front</div>
      <div className="face backSide">Back</div>
      <div className="face topSide">Top</div>
      <div className="face bottomSide">Bottom</div>
      <div className="face rightSide">Right</div>
      <div className="face leftSide">Left</div>
    </div>
  </div>
);
}

export default SpinningRectangle;
