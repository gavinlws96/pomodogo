import { BsGearFill } from "react-icons/bs";

import classes from "./HeaderOptions.module.css";

const HeaderOptions = (props) => {
  return (
    <div className={classes["header-options"]} onClick={props.settingHandler}>
      <BsGearFill className={classes.icon} />
      <span>Setting</span>
    </div>
  );
};

export default HeaderOptions;
