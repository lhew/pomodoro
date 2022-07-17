import { createContext } from "react";
import { ITask, ITaskContext, ITaskInput } from "./types";

export const TaskContext = createContext<ITaskContext>({
  tasks: [],
  addTask(_task) {
    return;
  },
  removeTask(_taskId) {
    return;
  },
});
