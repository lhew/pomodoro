import { ISettings } from "../settings/types";
import { ITask } from "../task/types";

export type TimerState = "running" | "stopped" | "paused";
export type TimerMode = "work" | "break";

export interface IRepositoryContext {
  updateTasks(data:ITask[], update?: string):void
  getTasks(): ITask[]
  updateSettings(_settings:ISettings): void,
  getSettings(): ISettings
}

