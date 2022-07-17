import React from "react";
import { Icons } from "../../generated/icons/types";
import { useTimer } from "../../provider/timer/TimerProvider";
import ProgressCircle from "../progresscircle";
import TimerDisplay from "../timerdisplay";

const Timer = ({ size = 300 }) => {
  const {
    initialRemainingTime,
    remainingTime,
    timerState,
    toggleTimer,
    reset,
  } = useTimer();
  const progress = parseInt(`${(remainingTime / initialRemainingTime) * 100}`);

  return (
    <div className={`relative w-[${size}px] h-[${size}px] l-3`}>
      <ProgressCircle
        progress={Math.abs((isNaN(progress) ? 0 : progress) - 100)}
      />
      <div className="absolute left-[50%] top-[50%] z-2 translate-x-[-50%] translate-y-[-40%] grid grid-cols-2 gap-3 justify-center">
        <button
          onClick={() => {
            toggleTimer();
          }}
        >
          <i
            className={`${timerState === "stopped" ? Icons.PLAY : Icons.STOP}`}
          />
        </button>
        <button onClick={() => reset()}>
          <i className={Icons.CCW} />
        </button>
        <TimerDisplay time={remainingTime} className="col-span-2" />
      </div>
    </div>
  );
};

export default Timer;
