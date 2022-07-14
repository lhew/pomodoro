import React from "react";
import { useTask } from "../../provider/task/TaskProvider";
import { TaskStatus } from "../../provider/task/types";
import { Icons } from "../../generated/icons/types";
const TaskList = () => {
  const { tasks } = useTask();

  return (
    <>
      {(tasks || []).length === 0 && <div>No tasks at the moment</div>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="grid grid-cols-3">
            <div>{task.name}</div>
            {task.status === TaskStatus.DONE && <i className={Icons.OK} />}
            {task.status === TaskStatus.IDLE && <i className={Icons.CCW} />}
            {task.status !== TaskStatus.DONE && <i className={Icons.TRASH} />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
