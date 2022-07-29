import { v4 } from "uuid";

import { ReactNode, useContext, useEffect, useState } from "react";
import { TaskContext } from "./context";
import { ITask, ITaskContext, TaskStatus } from "./types";

interface TaskProviderProps {
  children: ReactNode;
  initialTasks?: ITask[];
}

const TaskProvider = ({ children, initialTasks = [] }: TaskProviderProps) => {
  const [_tasks, _setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    _setTasks(initialTasks);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: _tasks,

        addTask(task) {
          _setTasks([
            ..._tasks,
            {
              name: task,
              id: v4(),
              status: TaskStatus.IDLE,
              current: _tasks.length === 0,
            },
          ]);
        },
        setCurrentTask(taskId) {
          _setTasks(
            _tasks.map((task) => ({ ...task, current: task.id === taskId }))
          );
        },

        setTaskStatus(taskId, status) {
          _setTasks(
            _tasks.map((task) => ({
              ...task,
              current: false,
              status: taskId === task.id ? status : task.status,
            }))
          );
        },

        removeTask(taskId) {
          _setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
        },
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): ITaskContext => useContext(TaskContext);

export default TaskProvider;
