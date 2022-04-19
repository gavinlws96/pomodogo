import { FaEllipsisV } from "react-icons/fa";

import classes from "./TaskHeader.module.css";

const TaskHeader = (props) => {
  return (
    <div className={classes.header}>
      <span>Tasks</span>
      <FaEllipsisV className={classes.icon}/>
    </div>
  );
};

export default TaskHeader;
