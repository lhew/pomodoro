import { createContext } from "react";
import { ITimerContext } from "./types";

export const TimerContext = createContext<ITimerContext>({
  timerState: "stopped",
  totalRemainingTime: 300,
  remainingTime: 0,
  timerMode: "work",
  setTotalRemainingTime() {
    return null;
  },
  setTimerMode(_timerMode) {
    return null;
  },
  increaseTime() {
    return null;
  },
  toggleTimer() {
    return null;
  },
  start() {
    return null;
  },
  stop() {
    return null;
  },
  reset() {
    return null;
  },
  finish() {
    return null;
  },
});
