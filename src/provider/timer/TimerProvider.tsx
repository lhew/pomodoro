import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";
import { useInterval } from "usehooks-ts";
import { TimerContext } from "./context";
import { ITimerContext } from "./types";

const TimerProvider: FC<{
  children: ReactNode;
  initialRemainingTime: number;
  onFinish: () => null;
}> = ({ children, initialRemainingTime, onFinish }) => {
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);
  const [timerState, setTimerState] =
    useState<"running" | "stopped">("stopped");

  let timeout = useRef();

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
