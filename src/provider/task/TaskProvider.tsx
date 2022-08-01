import { v4 } from "uuid";

import { ReactNode, useContext, useEffect, useState } from "react";
import { TaskContext } from "./context";
import { ETaskStatus, ITask, ITaskContext, TaskStatus } from "./types";
import { useRepository } from "../repository/RepositoryProvider";
import { useTimer } from "../timer/TimerProvider";

interface TaskProviderProps {
  children: ReactNode;
  initialTasks?: ITask[];
}

const TaskProvider = ({ children, initialTasks = [] }: TaskProviderProps) => {
  const [_tasks, _setTasks] = useState<ITask[]>([]);
  const { remainingTime, timerMode, setTimerMode } = useTimer();
  const { updateTasks, getTasks } = useRepository();

  useEffect(() => {
    _setTasks(getTasks());
  }, [getTasks]);

  useEffect(() => {
    if (initialTasks.length > 0) {
      _setTasks(initialTasks);
    }
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      const nextTimerMode = timerMode === "work" ? "break" : "work";
      if (timerMode === "work") {
        setTaskStatus(get(TaskStatus.enum.CURRENT)[0].id, TaskStatus.enum.DONE);
      }
      setTimerMode(nextTimerMode);
    }
  }, [remainingTime]);

  useEffect(() => {
    if (get(TaskStatus.enum.IDLE).length === 0) {
      setTimerMode("work");
    }
  }, [_tasks, timerMode, setTimerMode]);

  function setTaskStatus(taskId: ITask["id"], status: ETaskStatus) {
    const updatedTasks: ITask[] = _tasks.map((task) => ({
      ...task,
      current: false,
      status: taskId === task.id ? status : task.status,
    }));

    _setTasks(updatedTasks);
    updateTasks(updatedTasks);
  }

  function setCurrentTask(taskId: ITask["id"]) {
    const updatedTasks: ITask[] = _tasks.map((task) => ({
      ...task,
      current: task.id === taskId,
    }));

    _setTasks(updatedTasks);
    updateTasks(updatedTasks);
  }

  function get(taskType: ETaskStatus) {
    const done = (_tasks || []).filter(
      (task) => task.status === TaskStatus.enum.DONE
    );
    const pending = (_tasks || []).filter(
      (task) => task.status !== TaskStatus.enum.DONE
    );
    const current = (_tasks || []).filter((task) => task.current);

    switch (taskType) {
      case TaskStatus.enum.IDLE || TaskStatus.enum.PROGRESS:
        return pending;

      case TaskStatus.enum.DONE:
        return done;

      case TaskStatus.enum.CURRENT:
        return current;

      default:
        return _tasks;
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: _tasks,

        addTask(task) {
          const updatedTasks: ITask[] = [
            ..._tasks,
            {
              name: task,
              id: v4(),
              status: TaskStatus.enum.IDLE,
              current: _tasks.length === 0,
            },
          ];

          _setTasks(updatedTasks);
          updateTasks(updatedTasks);
        },

        setCurrentTask,
        setTaskStatus,
        removeTask(taskId) {
          const updatedTasks: ITask[] = _tasks.filter(
            (task) => task.id !== taskId
          );

          _setTasks(updatedTasks);
          updateTasks(updatedTasks);
        },

        get,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): ITaskContext => useContext(TaskContext);

export default TaskProvider;
