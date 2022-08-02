import { createContext } from "react";
import { defaultSettings } from "../settings/context";
import { IRepositoryContext } from "./types";

export const RepositoryContext = createContext<IRepositoryContext>({
  updateTasks(_data, _update) {
    return null;
  },
  getTasks() {
    return [];
  },
  updateSettings(_settings) {
    return null;
  },
  getSettings() {
    return defaultSettings;
  },
});
