import React from "react";
import { Icons } from "../../generated/icons/types";
import { useSettings } from "../../provider/settings/SettingsProvider";
import { useTask } from "../../provider/task/TaskProvider";
import { TaskStatus } from "../../provider/task/types";
import { useTimer } from "../../provider/timer/TimerProvider";
import { statusIcon } from "../../selectors/taskSwitcher";
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
  const { settings, toggleSettingsPopup } = useSettings();

  const progress = parseInt(`${(remainingTime / totalRemainingTime) * 100}`);
  const pendingTasks = (tasks || []).filter(
    (task) =>
      task.status === TaskStatus.enum.IDLE ||
      task.status === TaskStatus.enum.PROGRESS
  );
  const currentTask = pendingTasks.find((task) => task.current);

  return (
    <div
      className={`relative m-[0_auto] max-w-[${size}px] max-h-[${size}px] l-3`}
    >
      <ProgressCircle
        progress={Math.abs((isNaN(progress) ? 0 : progress) - 100)}
      />
      <div className="absolute left-[50%] top-[50%] z-2 translate-x-[-50%] translate-y-[-40%] grid grid-cols-4 gap-3 justify-center">
        <button
          disabled={pendingTasks.length === 0}
          onClick={() => {
            if (!currentTask) {
              setCurrentTask(pendingTasks[0].id);
            }
            toggleTimer();
          }}
        >
          <i className={statusIcon(timerState)} />
        </button>
        <button disabled={pendingTasks.length === 0} onClick={() => reset()}>
          <i className={Icons.CCW} />
        </button>
        <button
          className="font-bold"
          disabled={pendingTasks.length === 0}
          onClick={() => increaseTime()}
        >
          +
          {timerMode === "work"
            ? settings.taskExtraTime
            : settings.breakExtraTime}
        </button>
        <button onClick={() => toggleSettingsPopup()}>
          <i className={Icons.COG} />
        </button>
        <TimerDisplay time={remainingTime} className="col-span-4 text-center" />
      </div>
    </div>
  );
};

export default Timer;
