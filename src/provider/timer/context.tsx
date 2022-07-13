import { createContext } from "react";
import { ITimerContext } from "./types";

export const TimerContext = createContext<ITimerContext>({
  timerState: "stopped",
  initialRemainingTime: 300,
  remainingTime: 0,
  toggleTimer() {},
  start() {},
  stop() {},
  reset() {},
  finish() {},
});
