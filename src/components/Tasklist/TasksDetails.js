import { Fragment } from "react";
import classes from "./TasksDetails.module.css";

const TaskDetails = (props) => {
  const task = undefined;

  const detailContent = task ? (
    <Fragment>
      <span>
        Est: <span>0</span>
      </span>
      <span>
        Act: <span>0</span>
      </span>
      <span>
        Finish at <span>11:49</span>
      </span>
    </Fragment>
  ) : (
    <span className={classes["no-task"]}>Add a task to get started</span>
  );

  return <div className={classes.details}>{detailContent}</div>;
};

export default TaskDetails;
