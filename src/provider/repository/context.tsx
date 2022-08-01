import { createContext } from "react";
import { ITask } from "../task/types";
import { IRepositoryContext } from "./types";

export const RepositoryContext = createContext<IRepositoryContext>({
  updateRepository(_data, _update) {},
  getItems() {
    return [];
  },
});
