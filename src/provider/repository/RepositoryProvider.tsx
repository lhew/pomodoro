import React, { ReactNode, useContext } from "react";
import {
  LOCALSTORAGE_SETTINGS_KEY,
  LOCALSTORAGE_TASKS_KEY,
} from "../../setup/constants";
import { defaultSettings } from "../settings/context";
import { ISettings, Settings } from "../settings/types";
import { ITask, Task } from "../task/types";
import { RepositoryContext } from "./context";
import { IRepositoryContext } from "./types";

interface RepositoryProviderProps {
  type?: "localstorage" | "firebase";
  children?: ReactNode;
}

const RepositoryProvider = ({ children }: RepositoryProviderProps) => {
  const updateTasks = (data: ITask[] = []) => {
    if (Array.isArray(data)) {
      data.forEach((task) => Task.parse(task));
      localStorage.setItem(LOCALSTORAGE_TASKS_KEY, JSON.stringify(data));
    } else {
      throw new Error("not parsed");
    }
  };

  const getTasks = () => {
    try {
      const items = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_TASKS_KEY) || "[]"
      );

      if (!Array.isArray(items)) {
        throw new Error("Parsed data is not a valid list of tasks");
      }

      return items.map((task) => Task.parse(task));
    } catch (e) {
      console.error("stored tasks data is not valid json. ", e);
      return [];
    }
  };

  const updateSettings = (data: ISettings) => {
    try {
      Settings.parse(data);
      localStorage.setItem(LOCALSTORAGE_SETTINGS_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("could not update settings", e);
    }
  };

  const getSettings = (): ISettings => {
    try {
      const storedSettings = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_SETTINGS_KEY) || "{}"
      );

      return Settings.parse(storedSettings);
    } catch (e) {
      console.warn("settings were not loaded. using default settings.");
      console.error(e);
      updateSettings(defaultSettings);
      return defaultSettings;
    }
  };

  return (
    <RepositoryContext.Provider
      value={{
        updateTasks,
        getTasks,
        updateSettings,
        getSettings,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export default RepositoryProvider;

export const useRepository = (): IRepositoryContext =>
  useContext(RepositoryContext);
