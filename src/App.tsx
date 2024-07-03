import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Settings from "./components/Settings";
import { RootState } from "./redux/store";
import { POMODORO, SHORT_BREAK } from "./constant";
const App: React.FC = () => {
  const { settingsopen, mode } = useSelector((state: RootState) => state.timer);
  const background =
    mode == POMODORO
      ? "bg-pomodoro"
      : mode == SHORT_BREAK
      ? "bg-shortbreak"
      : "bg-longbreak";
  return (
    <div
      className={`${
        settingsopen ? "bg-opacity-75" : ""
      } w-full h-screen flex justify-center  ${background} transition-colors`}
    >
      <div
        className={`${
          settingsopen ? "bg-opacity-25" : ""
        }  h-screen p-4 w-full sm:max-w-2xl`}
      >
        <Header />
        <Main />
        {settingsopen && <Settings />}
      </div>
    </div>
  );
};

export default App;
