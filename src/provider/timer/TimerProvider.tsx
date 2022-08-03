import { ReactNode, useContext, useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";
import { useAlarm } from "../alarm/AlarmProvider";
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
  onFinish = () => null,
}: TimerProviderProps) => {
  const { settings } = useSettings();
  const [totalRemainingTime, setTotalRemainingTime] =
    useState(initialRemainingTime);
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);
  const [timerState, setTimerState] = useState<TimerState>("stopped");
  const [timerMode, setTimerMode] = useState<TimerMode>("work");

  const reset = (nextAction: TimerState = "stopped") => {
    const { taskTime, breakTime } = settings;

    const resetTime = timerMode === "work" ? taskTime : breakTime;

    setTotalRemainingTime(resetTime);
    setRemainingTime(resetTime);
    setTimerState(nextAction);
  };

  const alarm = useAlarm();

  useEffect(() => {
    const { taskTime } = settings;
    setTotalRemainingTime(taskTime);
    setRemainingTime(taskTime);
  }, [settings]);

  useEffect(() => {
    setTimerMode(initialMode);
  }, [initialMode]);

  useEffect(() => {
    if (remainingTime === 0) {
      alarm.play();

      if (settings.showNotifications && !document.hasFocus()) {
        const notification = new Notification("Time is up!");

        notification.onclick = () => {
          window.focus();
          notification.close();
        };
      }
    }
  }, [remainingTime]);

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
        start() {
          return null;
        },
        stop() {
          return null;
        },
        finish() {
          return null;
        },
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
