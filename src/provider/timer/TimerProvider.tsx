import { ReactNode, useContext, useRef, useState } from "react";
import { useInterval } from "usehooks-ts";
import { TimerContext } from "./context";
import { ITimerContext, TimerMode, TimerState } from "./types";

interface TimerProviderProps {
  children: ReactNode;
  /**
   * Time in seconds
   */
  initialRemainingTime?: number;
  onFinish?: () => void;
}

const TimerProvider = ({
  children,
  //initialRemainingTime = 25 * 60,
  initialRemainingTime = 5,
  onFinish = () => {},
}: TimerProviderProps) => {
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);
  const [timerState, setTimerState] = useState<TimerState>("stopped");
  const [timerMode, setTimerMode] = useState<TimerMode>("work");

  const reset = (nextAction: TimerState = "stopped") => {
    setRemainingTime(initialRemainingTime);
    setTimerState(nextAction);
  };

  useInterval(() => {
    if (timerState === "running" && remainingTime > 0) {
      setRemainingTime((oldVal) => oldVal - 1);
    }
    if (timerState === "running" && remainingTime === 0) {
      setTimerMode(timerMode === "break" ? "work" : "break");
      onFinish();
      reset();
    }
  }, 1000);

  return (
    <TimerContext.Provider
      value={{
        initialRemainingTime,
        timerState,
        remainingTime,
        timerMode,
        toggleTimer() {
          setTimerState(timerState === "running" ? "stopped" : "running");
        },
        start() {},
        stop() {},
        reset,
        setTimerMode,
        finish() {},
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = (): ITimerContext => useContext(TimerContext);

export default TimerProvider;
