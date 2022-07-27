import React from "react";
import { useTask } from "../../provider/task/TaskProvider";
import { ITask, TaskStatus } from "../../provider/task/types";
import { Icons } from "../../generated/icons/types";
import { useTimer } from "../../provider/timer/TimerProvider";
const TaskList = () => {
  const { tasks, removeTask, setCurrentTask } = useTask();
  const { reset, setTimerMode, timerMode, timerState } = useTimer();

  const isCurrentTask = (id: ITask["id"]) =>
    tasks.filter((task) => task.id === id).length > 0 &&
    timerState === "running";

  return (
    <>
      {(tasks || []).length === 0 && (
        <div className="text-center">No tasks at the moment</div>
      )}
      {timerMode === "break" && (
        <span className="flex justify-center mb-4">Break time</span>
      )}
      <ul>
        {tasks.map(({ id, name, current }) => (
          <div key={id} className="grid gap-x-3 grid-cols-[1fr_auto_auto]">
            <span className={`${current ? "font-bold" : ""}`}>{name}</span>
            <button
              onClick={() => {
                setCurrentTask(id);
                setTimerMode("work");
                reset("running");
              }}
            >
              <i className={Icons.PLAY} />
            </button>
            <button
              className={`opacity-${isCurrentTask(id) ? "0" : "1"}`}
              disabled={isCurrentTask(id)}
              onClick={() => {
                if (isCurrentTask(id)) {
                  console.log("stop the timer before deleting your task");
                } else {
                  removeTask(id);
                }
              }}
            >
              <i className={Icons.TRASH} />
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
