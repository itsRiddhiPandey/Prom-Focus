import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setLongBreakInterval, updateModeTime } from "../redux/slice/timerslice,";
import React from "react";
export interface InputInterface {
  id: string;
  label?: string;
  type: string;
  name: string;
  min: number;
  value: number;
}

const Input :React.FC<InputInterface> = ({ id, label, type, name, min, value }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className=" flex flex-col w-1/3 px-2 justify-center">
      {label && (
        <label htmlFor={id} className="text-gray-400">
          {label}
        </label>
      )}
      <input
        onChange={(e) =>
          label ? dispatch(updateModeTime({ mode: id, time: Number(e.target.value) })) : dispatch(setLongBreakInterval(Number(e.target.value)))
        }
        value={value}
        min={min}
        className="bg-settingscolor outline-none p-2"
        id={id}
        type={type}
        name={name}
        aria-label="input-timer"
      />
    </div>
  );
};

export default Input;
