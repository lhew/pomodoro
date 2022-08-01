import { createContext } from "react";
import { ITimerContext, TimerMode } from "./types";

export const TimerContext = createContext<ITimerContext>({
  timerState: "stopped",
  totalRemainingTime: 300,
  remainingTime: 0,
  timerMode: "work",
  setTotalRemainingTime() {},
  setTimerMode(_timerMode) {},
  increaseTime() {},
  toggleTimer() {},
  start() {},
  stop() {},
  reset() {},
  finish() {},
});
