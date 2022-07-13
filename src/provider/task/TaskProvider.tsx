import { v4 } from "uuid";

import { ReactNode, useContext, useEffect, useState } from "react";
import { TaskContext } from "./context";
import { ITask, ITaskContext, ITaskInput, TaskStatus } from "./types";

interface TaskProviderProps {
  children: ReactNode;
  initialTasks: ITask[];
}

const TaskProvider = ({ children, initialTasks }: TaskProviderProps) => {
  const [_tasks, _setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    _setTasks(initialTasks);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: _tasks,
        addTask: (task: ITaskInput) => {
          _setTasks((tasks) => [
            ...tasks,
            { ...task, id: v4(), status: TaskStatus.IDLE },
          ]);
        },
        removeTask(taskId: ITask["id"]) {
          _setTasks((tasks) => tasks.filter((task) => (task.id! += taskId)));
        },
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): ITaskContext => useContext(TaskContext);

export default TaskProvider;
