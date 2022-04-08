import { FaPaw } from "react-icons/fa";

import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.logo}>
      <FaPaw className={classes["logo-icon"]} />
      <b className={classes["logo-name"]}>Pomodogo</b>
    </div>
  );
};

export default Logo;
