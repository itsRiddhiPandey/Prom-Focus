import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModeButton from "./ModeButton";
import NextButton from "./NextButton";
import TimerButton from "./TimerButton";
import { AppDispatch, RootState } from "../redux/store";
import { setMode } from "../redux/slice/timerslice,";
import { formattimeInMinutes } from "../utils/utilityfunction";
interface Props {
  time: number;
  next: () => void;
  start: () => void;
  stop: () => void;
  ticking:boolean;
}

const Timer :React.FC<Props>= ({ time, next,start,stop ,ticking}) => {
  const { modes, mode } = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-4 bg-bgbutton mt-8">
      <div className="flexproperty justify-between">
        {Object.values(modes).map(({ id, label }) => (
          <ModeButton
            active={id === mode}
            OnClick={() => dispatch(setMode(id))}
           key={id}>
            {label}
          </ModeButton>
        ))}
      </div>
      <div className="text-8xl text-center my-10 text-white font-bold tracking-wider">
        {formattimeInMinutes(time)}
        {/* {time!==0 ? formattimeInMinutes(time): `${modes[mode].time >10 ? modes[mode].time : "0"+modes[mode].time} : 00`} */}
      </div>
      <div className="flexproperty gap-4">
        <TimerButton
          active={ticking}
          OnClick={()=> ticking ? stop() : start()}
        />
       {ticking &&  <NextButton OnClick={() => next()} />}
      </div>
    </div>
  );
};

export default Timer;
