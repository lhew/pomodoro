import React from "react";
import { Icons } from "../../generated/icons/types";
import { useTask } from "../../provider/task/TaskProvider";
import { TaskStatus } from "../../provider/task/types";
import { useTimer } from "../../provider/timer/TimerProvider";
import ProgressCircle from "../progresscircle";
import TimerDisplay from "../timerdisplay";

const Timer = ({ size = 300 }) => {
  const {
    totalRemainingTime,
    remainingTime,
    timerState,
    timerMode,
    toggleTimer,
    reset,
    increaseTime,
  } = useTimer();

  const { tasks, setCurrentTask } = useTask();

  const progress = parseInt(`${(remainingTime / totalRemainingTime) * 100}`);
  const pendingTasks = (tasks || []).filter(
    (task) =>
      task.status === TaskStatus.IDLE || task.status === TaskStatus.PROGRESS
  );
  const currentTask = pendingTasks.find((task) => task.current);

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
      <div className="absolute left-[50%] top-[50%] z-2 translate-x-[-50%] translate-y-[-40%] grid grid-cols-3 gap-3 justify-center">
        <button
          disabled={pendingTasks.length === 0}
          onClick={() => {
            if (!currentTask) {
              setCurrentTask(pendingTasks[0].id);
            }
            toggleTimer();
          }}
        >
          <i className={statusIcon()} />
        </button>
        <button disabled={pendingTasks.length === 0} onClick={() => reset()}>
          <i className={Icons.CCW} />
        </button>
        <button
          className="font-bold"
          disabled={pendingTasks.length === 0}
          onClick={() => increaseTime()}
        >
          +{timerMode === "work" ? "5" : "2"}
        </button>
        <TimerDisplay time={remainingTime} className="col-span-3 text-center" />
      </div>
    </div>
  );
};

export default Timer;
