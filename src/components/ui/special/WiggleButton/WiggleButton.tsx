import React from 'react';
import './WiggleButton.css';


export const WiggleButton = ({text} : {text:string}) => {
  return (
<p className="w-1/3 h-12 bg-[#4E6560] text-white  font-bold flex items-center justify-center border-t-4 border-[#E29A5b] animate-[wiggle_10s_linear_infinite] rounded-[0px_0px_4px_4px] origin-[50%_5em] hover:animate-shake">
  {text}
</p>
  );
}

// original style className:"w-24 h-12 bg-[#4E6560] text-white  font-bold flex items-center justify-center border-t-4 border-[#E29A5b] animate-[wiggle_2s_linear_infinite] rounded-[0px_0px_4px_4px] origin-[50%_5em] "