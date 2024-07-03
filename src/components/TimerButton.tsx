import React from "react";
interface Props{
         OnClick:()=> void;
         active:boolean;
}
const TimerButton :React.FC<Props> = ({ OnClick, active }) => {
  return (
    <div className="flexproperty my-5" onClick={OnClick}>
      <div className="cursor-pointer bg-white w-48 text-red-500 font-semibold text-2xl  flexproperty p-2 rounded-xl">
        {active ? "STOP" : "START"}
      </div>
    </div>
  );
};

export default TimerButton;
