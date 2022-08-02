import { createContext } from "react";
import { defaultSettings } from "../settings/context";
import { ITask } from "../task/types";
import { IRepositoryContext } from "./types";

export const RepositoryContext = createContext<IRepositoryContext>({
  updateTasks(_data, _update) {},
  getTasks() {
    return [];
  },
  updateSettings(_settings) {},
  getSettings() {
    return defaultSettings;
  },
});
