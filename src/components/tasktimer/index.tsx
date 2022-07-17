import React from "react";
import { useTask } from "../../provider/task/TaskProvider";
import TaskForm from "../taskform";
import TaskList from "../tasklist";
import Timer from "../timer";

const TaskTimer = () => {
  const { addTask, tasks } = useTask();

  return (
    <div className="max-w-[25rem] grid justify-center">
      <Timer />
      <TaskList />
      <TaskForm
        onAddTask={(name) => {
          addTask(name);
        }}
      />
    </div>
  );
};

export default TaskTimer;
