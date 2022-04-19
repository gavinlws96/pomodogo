import { useState } from "react";

import classes from "./Switch.module.css";

const Switch = (props) => {
  const [switchStatus, setSwitchStatus] = useState(false);

  const toggleSwitch = () => {
    setSwitchStatus((prev) => !prev);
  };

  return (
    <div
      className={`${classes.switch} ${
        switchStatus && classes["switch-active"]
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`${classes["switch-button"]} ${
          switchStatus && classes["button-active"]
        }`}
      />
    </div>
  );
};

export default Switch;
