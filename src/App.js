import { Fragment } from "react";

import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Timer />
    </Fragment>
  );
};

export default App;
