import React from "react";
import TaskProvider from "../../provider/task/TaskProvider";
import { TaskStatus } from "../../provider/task/types";

const TaskTimer = () => {
  return (
    <TaskProvider
      initialTasks={[
        { id: "1", name: "Buy milk", status: TaskStatus.IDLE },
        { id: "2", name: "Walk teddy", status: TaskStatus.IDLE },
        { id: "3", name: "Call mom", status: TaskStatus.IDLE },
      ]}
    >
      foo
    </TaskProvider>
  );
};

export default TaskTimer;
