import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import TimerContextProvider from "./context/timer-context";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <TimerContextProvider>
    <App />
  </TimerContextProvider>
);
