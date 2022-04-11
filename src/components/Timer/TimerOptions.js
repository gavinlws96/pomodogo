import { useState } from "react";

import classes from "./TimerOptions.module.css";

const TimerOptions = (props) => {
  const [activeOption, setActiveOption] = useState("Pomodoro");
  const timerOptions = ["Short Break", "Pomodoro", "Long Break"];

  const clickHandler = (e) => {
    setActiveOption(e.target.innerHTML);
  };

  return (
    <div className={classes["timer-options"]}>
      {timerOptions.map((option, index) => {
        return (
          <span key={index}
            onClick={clickHandler}
            className={option === activeOption ? classes.active : undefined}
          >
            {option}
          </span>
        );
      })}
    </div>
  );
};

export default TimerOptions;
