import React, { useEffect, useState } from "react";
import { useTask } from "../../provider/task/TaskProvider";
import { TaskStatus } from "../../provider/task/types";
import { useTimer } from "../../provider/timer/TimerProvider";
import Popup from "../popup";

const TaskPopupAlert = () => {
  const { tasks, setTaskStatus, setCurrentTask } = useTask();
  const { remainingTime, timerMode, setTimerMode, reset } = useTimer();

  const [showPopup, setShowPopup] = useState(false);
  const currentTask = (tasks && tasks.find((task) => task.current)) || null;
  const pendingTasks = (tasks || []).filter(
    (task) =>
      task.status === TaskStatus.enum.IDLE ||
      task.status === TaskStatus.enum.PROGRESS
  );
  useEffect(() => {
    if (remainingTime === 0) {
      setShowPopup(true);
    }
  }, [remainingTime, setShowPopup]);

  return (
    <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
      <h1 className="text-center">Time is up!</h1>

      <button
        className="bg-blue-700 text-white border-2 border-blue-700 p-2 pl-3 pr-3 text-center rounded-sm w-full mt-3"
        onClick={() => {
          // if (timerMode === "work") {
          //   if (pendingTasks.length > 0) {
          //     setCurrentTask(pendingTasks[0].id);
          //   }
          //   setTimerMode("break");
          // } else if (timerMode === "break") {
          //   setTimerMode("work");
          // }
          // reset();
          setShowPopup(false);
        }}
      >
        Close
      </button>
    </Popup>
  );
};
export default TaskPopupAlert;
