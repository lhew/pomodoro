import { createContext } from "react";
import { IAlarmContext } from "./types";

export const AlarmContext = createContext<IAlarmContext>({
  setAlarm(_alarm: string) {
    return null;
  },
  play() {
    return null;
  },
  stop() {
    return null;
  },
});
