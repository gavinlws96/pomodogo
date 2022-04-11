import { useContext } from "react";

import { FaStepForward, FaRedo } from "react-icons/fa";
import { TimerContext } from "../../context/timer-context";

import classes from "./TimerButtons.module.css";

const TimerButtons = (props) => {
  const timerCtx = useContext(TimerContext);

  const buttonText = timerCtx.timerRunning ? "STOP" : "START";

  return (
    <div className={classes["timer-buttons"]}>
      <FaRedo
        onClick={timerCtx.resetButtonHandler}
        className={`${classes.redo} ${
          timerCtx.timerHasStarted ? classes.visible : undefined
        }`}
      />
      <button
        onClick={timerCtx.startButtonHandler}
        className={`${classes.button} ${
          timerCtx.timerRunning ? classes.clicked : undefined
        }`}
      >
        {buttonText}
      </button>
      <FaStepForward
        className={`${classes.forward} ${
          timerCtx.timerHasStarted ? classes.visible : undefined
        }`}
      />
    </div>
  );
};
export default TimerButtons;
