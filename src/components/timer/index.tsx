import React from "react";
import { Icons } from "../../generated/icons/types";
import { useTask } from "../../provider/task/TaskProvider";
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

  const { tasks } = useTask();

  const progress = parseInt(`${(remainingTime / initialRemainingTime) * 100}`);

  const statusIcon = () => {
    switch (timerState) {
      case "stopped":
        return Icons.PLAY;
      case "running":
        return Icons.PAUSE;
      case "paused":
        return Icons.PLAY;
      default:
        return Icons.PLAY;
    }
  };

  return (
    <div
      className={`relative m-[0_auto] max-w-[${size}px] max-h-[${size}px] l-3`}
    >
      <ProgressCircle
        progress={Math.abs((isNaN(progress) ? 0 : progress) - 100)}
      />
      <div className="absolute left-[50%] top-[50%] z-2 translate-x-[-50%] translate-y-[-40%] grid grid-cols-2 gap-3 justify-center">
        <button
          disabled={tasks.length === 0}
          onClick={() => {
            toggleTimer();
          }}
        >
          <i className={statusIcon()} />
        </button>
        <button disabled={tasks.length === 0} onClick={() => reset()}>
          <i className={Icons.CCW} />
        </button>
        <TimerDisplay time={remainingTime} className="col-span-2" />
      </div>
    </div>
  );
};

export default Timer;
