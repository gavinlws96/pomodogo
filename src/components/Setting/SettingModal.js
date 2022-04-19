import { FaTimes } from "react-icons/fa";
import Switch from "../../assets/Switch";

import classes from "./SettingModal.module.css";

const SettingModal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes["options-placeholder"]}>
        <div className={classes.header}>
          <span>TIMER SETTING</span>
          <FaTimes onClick={props.onCancel} className={classes.icon} />
        </div>
        <div className={classes.divider} />
        <div className={classes["timer-field"]}>
          <span>Laps (minutes)</span>
          <div className={classes.inputs}>
            <label>
              Pomodoro
              <input type="number" max="59"/>
            </label>
            <label>
              Short Break
              <input type="number" />
            </label>
            <label>
              Long Break
              <input type="number" />
            </label>
          </div>
        </div>
        <div className={classes.divider} />
        <div className={classes["switch-option"]}>
          <span>Auto start Breaks?</span>
          <Switch />
        </div>
        <div className={classes.divider} />
        <div className={classes["switch-option"]}>
          <span>Auto start Pomodoros?</span>
          <Switch />
        </div>
        <div className={classes.divider} />
        <div className={classes["switch-option"]}>
          <span>Cycles between Long Breaks</span>
          <input type="number" />
        </div>
      </div>
      <div className={classes["save-placeholder"]}>
        <button className={classes.save} >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SettingModal;
