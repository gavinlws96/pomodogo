import { useContext } from "react";
import { TimerContext } from "../../context/timer-context";

import classes from "./TimeDisplay.module.css";

const TimeDisplay = (props) => {
  const timerCtx = useContext(TimerContext);

  const displayMinutes =
    timerCtx.minutes < 10
      ? "0" + timerCtx.minutes.toString()
      : timerCtx.minutes.toString();
  const displaySeconds =
    timerCtx.seconds < 10
      ? "0" + timerCtx.seconds.toString()
      : timerCtx.seconds.toString();

  return (
    <div className={classes["time-display"]}>
      {displayMinutes}:{displaySeconds}
    </div>
  );
};

export default TimeDisplay;
