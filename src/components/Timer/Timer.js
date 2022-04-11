import TimerOptions from "./TimerOptions";
import TimeDisplay from "./TimeDisplay";

import classes from "./Timer.module.css";
import TimerButtons from "./TimerButtons";

const Timer = (props) => {
  return (
    <div className={classes.timer}>
      <TimerOptions />
      <TimeDisplay />
      <TimerButtons />
    </div>
  );
};

export default Timer;
