import { ReactNode } from "react"
import React from "react";
interface Props{
         children:ReactNode;
         active:boolean;
         OnClick:()=>void;
}
const ModeButton :React.FC<Props> = ({children,active,OnClick}) => {
  return (
    <div onClick={OnClick} className={`text-white font-semibold p-2 w-28 flex justify-center items-center rounded-lg  cursor-pointer ${active ? 'bg-modebackground' : ''}`} data-testid="mode-button">
      {children}
    </div>
  )
}

export default ModeButton
