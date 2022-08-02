
export type TimerState = "running" | "stopped" | "paused";
export type TimerMode = "work" | "break";

export interface IAlarmContext {
    play(): void;
    stop(): void;
    setAlarm(alarm: string): void

  }

