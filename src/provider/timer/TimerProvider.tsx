import { ReactNode, useContext, useRef, useState } from "react";
import { useInterval } from "usehooks-ts";
import { TimerContext } from "./context";
import { ITimerContext } from "./types";

interface TimerProviderProps {
  children: ReactNode;
  /**
   * Time in seconds
   */
  initialRemainingTime: number;
  onFinish?: () => void;
}

const TimerProvider = ({
  children,
  initialRemainingTime = 25 * 60,
  onFinish = () => {},
}: TimerProviderProps) => {
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);
  const [timerState, setTimerState] =
    useState<"running" | "stopped">("stopped");

  const reset = () => {
    setRemainingTime(initialRemainingTime);
    setTimerState("stopped");
  };

  useInterval(() => {
    if (timerState === "running" && remainingTime > 0) {
      setRemainingTime((oldVal) => oldVal - 1);
    }
    if (timerState === "running" && remainingTime === 0) {
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
        toggleTimer() {
          setTimerState(timerState === "running" ? "stopped" : "running");
        },
        start() {},
        stop() {},
        reset,
        finish() {},
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = (): ITimerContext => useContext(TimerContext);

export default TimerProvider;
