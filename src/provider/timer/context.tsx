import { createContext } from "react";
import { ITimerContext, TimerMode } from "./types";

export const TimerContext = createContext<ITimerContext>({
  timerState: "stopped",
  initialRemainingTime: 300,
  remainingTime: 0,
  timerMode: "work",
  setTimerMode(_timerMode) {},
  toggleTimer() {},
  start() {},
  stop() {},
  reset() {},
  finish() {},
});
