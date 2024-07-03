// this is a higher order component In React
import React from "react";
interface props {
  children: React.ReactNode;
  OnClick: () => void;
}
const Button :React.FC<props>= ({ children, OnClick }) => {
  return (
    <div
      className="flexproperty  gap-2  p-2 bg-bgbutton w-32  rounded-xl text-white text-xl cursor-pointer"
      onClick={OnClick}
    >
      {children}
    </div>
  );
};

export default Button;
