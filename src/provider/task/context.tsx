import { createContext } from "react";
import { ITask, ITaskContext, ITaskInput } from "./types";

export const TaskContext = createContext<ITaskContext>({
  tasks: [],
  addTask(_task: ITaskInput) {
    return;
  },
  removeTask(_taskId: ITask["id"]) {
    return;
  },
});
