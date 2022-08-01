import { ITask } from "../task/types";

export type TimerState = "running" | "stopped" | "paused";
export type TimerMode = "work" | "break";

export interface IRepositoryContext {
  updateRepository(data:ITask[], update?: string):void
  getItems(): ITask[]
}

