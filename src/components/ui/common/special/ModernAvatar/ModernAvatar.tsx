import React from "react";
import "./ModernAvatar.css"

const AnimationReact = () => {
  return (
    <div className="flex justify-center cursor-pointer bg-gray-300 min-h-screen">
      <div className="animation">
        <img
          src="https://www.tailwindtap.com/assets/components/animation/avatar.png"
          className="w-[200px] hover:min-h-[240px] max-h-[240px] pt-[calc(200px/5)] hover:max-h-[240px] rounded-b-full outline-8 outline outline-[#ae3ec9] -outline-offset-8  hover:-outline-offset-[30px] transition-all duration-500 ease-out hover:scale-[1.28] object-cover"
          alt="avatar"
        />
      </div>
    </div>
  );
};
export default AnimationReact;
/*
    Extenal css to add 
.animation img {
  background: radial-gradient(
      circle closest-side,
      #e9ecef calc(99% - 8px),
      #ae3ec9 calc(100% - 8px) 99%,
      #0000
    )
    50% / calc(100% / 1) 100% no-repeat content-box;
  -webkit-mask: linear-gradient(#000 0 0) no-repeat 50%
      calc(1px - calc((1 / 1 - 1) * 200px / 2 - 8px)) /
      calc(100% / 1 - 2 * 8px - 2px) 50%,
    radial-gradient(circle closest-side, #000 99%, #0000) 50% / calc(100% / 1)
      100% no-repeat content-box;
}
.animation img:hover {
  background: radial-gradient(
      circle closest-side,
      #e9ecef calc(99% - 8px),
      #ae3ec9 calc(100% - 8px) 99%,
      #0000
    )
    50% / calc(100% / 1.28) 100% no-repeat content-box !important;
  -webkit-mask: linear-gradient(#000 0 0) no-repeat 50%
      calc(1px - calc((1 / 1.28 - 1) * 200px / 2 - 8px)) /
      calc(100% / 1.28 - 2 * 8px - 2px) 50%,
    radial-gradient(circle closest-side, #000 99%, #0000) 50% /
      calc(100% / 1.28) 100% no-repeat content-box !important;
}
 */
