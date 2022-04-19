import { FaPlusCircle } from "react-icons/fa";

import classes from "./AddTaskButton.module.css";

const AddTaskButton = (props) => {
  return (
    <div className={classes["add-task-container"]} onClick={props.addHandler}>
      <FaPlusCircle className={classes.icon} />
      <button>Add Task</button>
    </div>
  );
};

export default AddTaskButton;
