import React from "react";
import { useTask } from "../../provider/task/TaskProvider";
import { TaskStatus } from "../../provider/task/types";
import { Icons } from "../../generated/icons/types";
const TaskList = () => {
  const { tasks, removeTask } = useTask();
  return (
    <>
      {(tasks || []).length === 0 && (
        <div className="text-center">No tasks at the moment</div>
      )}
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="grid gap-x-3 grid-cols-3 grid-cols-[1fr_auto_auto]"
          >
            <span>{task.name}</span>
            <button>
              <i className={Icons.PLAY} />
            </button>
            <button onClick={() => removeTask(task.id)}>
              <i className={Icons.TRASH} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
