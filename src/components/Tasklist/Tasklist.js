import { useState, useRef, useEffect } from "react";

import AddTaskButton from "./AddTaskButton";
import TaskForm from "./TaskForm";
import TaskHeader from "./TaskHeader";
import TaskDetails from "./TasksDetails";

import classes from "./Tasklist.module.css";

const Tasklist = (props) => {
  const [formActive, setFormActive] = useState(false);
  const formRef = useRef();

  const addHandler = (props) => {
    setFormActive(true);
  };

  const cancelHandler = () => {
    setFormActive(false);
    // reset content
  }

  useEffect(() => {
    formRef.current.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <div className={classes.tasklist}>
      <TaskHeader />
      <div className={classes.divider} />
      {!formActive && <AddTaskButton addHandler={addHandler} />}
      <TaskForm
        className={formActive && "active"}
        cancelHandler={cancelHandler}
        ref={formRef}
      />
      <TaskDetails />
    </div>
  );
};

export default Tasklist;
