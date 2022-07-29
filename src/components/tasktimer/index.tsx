import React from "react";
import { useTask } from "../../provider/task/TaskProvider";
import TaskForm from "../taskform";
import TaskList from "../tasklist";
import dynamic from "next/dynamic";

import TaskPopupAlert from "../taskpopupalert";

const Timer = dynamic(() => import("../timer"), {
  ssr: false,
});

const TaskTimer = () => {
  const { addTask } = useTask();

  return (
    <>
      <div className="max-w-[25em] flex flex-col align-center m-[0_auto] justify-center">
        <Timer />
        <TaskList />
        <TaskForm
          onAddTask={(name) => {
            addTask(name);
          }}
        />
      </div>
      <TaskPopupAlert />
    </>
  );
};

export default TaskTimer;
