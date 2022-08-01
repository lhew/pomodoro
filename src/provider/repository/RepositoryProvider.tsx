import React, { ReactNode, useContext } from "react";
import z from "zod";
import { LOCALSTORAGE_TASKS_KEY } from "../../setup/constants";
import { ITask, Task } from "../task/types";
import { RepositoryContext } from "./context";
import { IRepositoryContext } from "./types";

interface RepositoryProviderProps {
  type?: "localstorage" | "firebase";
  children?: ReactNode;
}

const RepositoryProvider = ({
  type = "localstorage",
  children,
}: RepositoryProviderProps) => {
  const updateRepository = (data: ITask[] = [], update = "") => {
    if (Array.isArray(data)) {
      data.forEach((task) => Task.parse(task));
      localStorage.setItem(LOCALSTORAGE_TASKS_KEY, JSON.stringify(data));
    } else {
      throw new Error("not parsed");
    }
  };

  const getItems = () => {
    try {
      const items = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_TASKS_KEY) || "[]"
      );

      if (!Array.isArray(items)) {
        throw new Error("Parsed data is not a valid list of tasks");
      }

      const parsedTasks = items.map((task) => Task.parse(task));

      return parsedTasks;
    } catch (e) {
      console.error("stored data is not valid json. ", e);
      // localStorage.removeItem(LOCALSTORAGE_TASKS_KEY);
      return [];
    }
  };

  return (
    <RepositoryContext.Provider
      value={{
        updateRepository,
        getItems,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export default RepositoryProvider;

export const useRepository = (): IRepositoryContext =>
  useContext(RepositoryContext);
