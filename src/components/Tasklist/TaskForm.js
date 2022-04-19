import { forwardRef } from "react";

import { FaCaretUp, FaCaretDown } from "react-icons/fa";

import classes from "./TaskForm.module.css";

const TaskForm = forwardRef((props, ref) => {

  return (
    <div
      className={`${classes["task-form"]} ${classes[props.className]}`}
      ref={ref}
    >
      <div className={classes.task}>
        <input placeholder="What are you working on?" />
      </div>
      <div className={classes.counter}>
        <span>Est Pomodoros</span>
        <p>
          <input />
          <FaCaretUp className={classes.icon} />
          <FaCaretDown className={classes.icon} />
        </p>
      </div>
      <div className={classes.options}>
        <button className={classes.cancel} onClick={props.cancelHandler}>
          Cancel
        </button>
        <button className={classes.save}>Save</button>
      </div>
    </div>
  );
});

export default TaskForm;
