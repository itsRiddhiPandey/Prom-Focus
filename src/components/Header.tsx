import React from "react";
import Button from "./Button";
import {FiSettings} from 'react-icons/fi'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { opensettings } from "../redux/slice/timerslice,";
const Header: React.FC = () => {
  const dispatch=useDispatch<AppDispatch>();
  return <div className="flex items-center justify-between mb-5">
    <h1 className="text-2xl font-bold text-white  tracking-wide">Promofocus</h1>
    <Button OnClick={()=> dispatch(opensettings())}>
      <FiSettings/> Settings
    </Button>
  </div>;
};

export default Header;
