
export type TimerState = "running" | "stopped" | "paused";
export type TimerMode = "work" | "break";

export interface ITimerContext {
    timerState:TimerState;
    remainingTime: number;
    timerMode:TimerMode;
    totalRemainingTime: number;
    setTotalRemainingTime(totalRemainingTime: number):void;
    toggleTimer(): void;
    setTimerMode(timerMode: TimerMode): void;
    increaseTime(): void;
    start(): void;
    stop(): void;
    reset(nextAction?: TimerState): void;
    finish(): void;
  }

