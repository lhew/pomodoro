import React from "react";
import { useTask } from "../../provider/task/TaskProvider";
import { ITask, TaskStatus } from "../../provider/task/types";
import { Icons } from "../../generated/icons/types";
import { useTimer } from "../../provider/timer/TimerProvider";
const TaskList = () => {
  const { tasks, removeTask, setCurrentTask, setTaskStatus } = useTask();
  const { reset, setTimerMode, timerMode, timerState } = useTimer();

  const isCurrentTask = (id: ITask["id"]) =>
    tasks.filter((task) => task.id === id).length > 0 &&
    timerState === "running";

  const finishedTasks = (tasks || []).filter(
    (task) => task.status === TaskStatus.DONE
  );
  const pendingTasks = (tasks || []).filter(
    (task) =>
      task.status === TaskStatus.IDLE || task.status === TaskStatus.PROGRESS
  );

  return (
    <>
      {(tasks || []).length === 0 && (
        <div className="text-center">No tasks at the moment</div>
      )}
      {timerMode === "break" && (
        <span className="flex justify-center mb-4">Break time</span>
      )}
      <ul>
        {pendingTasks.map(({ id, name, current }) => (
          <li key={id} className="grid gap-x-3 grid-cols-[1fr_auto_auto]">
            <span className={`${current ? "font-bold" : ""}`}>
              {" "}
              {id} - {name}
            </span>
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
          </li>
        ))}

        {finishedTasks.length > 0 && (
          <li className="text-center my-3">Finished Tasks</li>
        )}
        {finishedTasks.map(({ id, name }) => (
          <li
            key={id}
            className="grid gap-x-3 grid-cols-[1fr_auto_auto] line-through"
          >
            <span>
              {id} {name}
            </span>
            <span></span>
            <button
              onClick={() => {
                setTaskStatus(id, TaskStatus.IDLE);
              }}
            >
              <i className={Icons.CCW} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
