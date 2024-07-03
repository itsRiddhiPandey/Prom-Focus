import React from "react";
interface Props{
  progress:number
}
const ProgressBar :React.FC<Props>= ({progress}) => {
  return (
    <div className="w-full h-1 bg-loaderbg rounded-xl overflow-hidden">
      {/* child div  */}
      <div className={`h-full bg-white`} style={{width:`${progress}%`}} data-testid="progress-bar">
      </div>
    </div>
  )
}

export default ProgressBar
