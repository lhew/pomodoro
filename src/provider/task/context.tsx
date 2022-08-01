import { createContext } from "react";
import { ITaskContext } from "./types";

export const TaskContext = createContext<ITaskContext>({
  tasks: [],
  addTask(_task) {
    return;
  },
  setCurrentTask(_taskId) {
    return;
  },
  removeTask(_taskId) {
    return;
  },
  setTaskStatus(_taskId, _status) {
    return;
  },
  get(_taskType) {
    return [];
  },
});
