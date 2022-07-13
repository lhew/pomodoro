export interface ITimerContext {
    timerState: "stopped" | "running";
    initialRemainingTime: number;
    remainingTime: number;
    toggleTimer(): void;
    start(): void;
    stop(): void;
    reset(): void;
    finish(): void;
  }