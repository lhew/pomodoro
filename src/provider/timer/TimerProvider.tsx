import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { useInterval } from "usehooks-ts";
import { useSettings } from "../settings/SettingsProvider";
import { TimerContext } from "./context";
import { ITimerContext, TimerMode, TimerState } from "./types";

export interface TimerProviderProps {
  children: ReactNode;
  /**
   * Time in seconds
   */
  initialRemainingTime?: number;
  initialMode?: "work" | "break";
  onFinish?: () => void;
}

const TimerProvider = ({
  children,
  initialRemainingTime = 3,
  initialMode = "work",
  onFinish = () => {},
}: TimerProviderProps) => {
  const { settings } = useSettings();
  const [totalRemainingTime, setTotalRemainingTime] =
    useState(initialRemainingTime);
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);
  const [timerState, setTimerState] = useState<TimerState>("stopped");
  const [timerMode, setTimerMode] = useState<TimerMode>("work");

  const reset = (nextAction: TimerState = "stopped") => {
    setTotalRemainingTime(initialRemainingTime);
    setRemainingTime(initialRemainingTime);
    setTimerState(nextAction);
  };

  useEffect(() => {
    setTimerMode(initialMode);
  }, [initialMode]);

  useInterval(() => {
    if (timerState === "running" && remainingTime > 0) {
      setRemainingTime((oldVal) => oldVal - 1);
    }
    if (timerState === "running" && remainingTime === 0) {
      onFinish();
      reset();
    }
  }, 1000);

  const increaseTime = () => {
    const increaseValue =
      timerMode === "work" ? settings.taskTime : settings.breakTime;
    setTotalRemainingTime((oldVal) => oldVal + increaseValue);
    setRemainingTime((oldVal) => oldVal + increaseValue);
  };

  const toggleTimer = () =>
    setTimerState(timerState === "running" ? "stopped" : "running");

  return (
    <TimerContext.Provider
      value={{
        totalRemainingTime,
        timerState,
        remainingTime,
        timerMode,
        setTotalRemainingTime,
        start() {},
        stop() {},
        finish() {},
        toggleTimer,
        reset,
        setTimerMode,
        increaseTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = (): ITimerContext => useContext(TimerContext);

export default TimerProvider;
