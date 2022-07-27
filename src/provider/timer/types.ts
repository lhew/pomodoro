
export type TimerState = "running" | "stopped" | "paused";
export type TimerMode = "work" | "break";

export interface ITimerContext {
    timerState:TimerState;
    initialRemainingTime: number;
    remainingTime: number;
    timerMode:TimerMode;
    toggleTimer(): void;
    setTimerMode(timerMode: TimerMode): void;
    start(): void;
    stop(): void;
    reset(nextAction?: TimerState): void;
    finish(): void;
  }

