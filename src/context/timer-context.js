import { createContext, useState, useEffect } from "react";

export const TimerContext = createContext({
  minutes: Number,
  seconds: Number,
  timerHasStarted: false,
  timerRunning: false,
  timerCompleted: false,
  startButtonHandler: () => {},
  resetButtonHandler: () => {},
});

const TimerContextProvider = (props) => {
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [timerHasStarted, setTimerHasStarted] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerCompleted, setTimerCompleted] = useState(false);

  const startButtonHandler = (e) => {
    setTimerHasStarted(true);
    setTimerRunning((prev) => !prev);
  };

  const resetButtonHandler = (e) => {
    setTimerHasStarted(false);
    setTimerRunning(false);
    setMinutes(30);
    setSeconds(0);
  };

  useEffect(() => {
    if (!timerCompleted && timerRunning) {
      const countdownTimer = setInterval(() => {
        if (seconds === 0 && minutes !== 0) {
          setSeconds((prev) => 59);
          setMinutes((prev) => prev - 1);
        } else if (seconds === 0 && minutes === 0) {
          setTimerCompleted(true);
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);

      return () => {
        clearInterval(countdownTimer);
      };
    }
  });

  return (
    <TimerContext.Provider
      value={{
        minutes,
        seconds,
        timerHasStarted,
        timerRunning,
        timerCompleted,
        startButtonHandler,
        resetButtonHandler,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;
