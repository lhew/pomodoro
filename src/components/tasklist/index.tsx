import React from "react";
import { useTask } from "../../provider/task/TaskProvider";

const TaskList = () => {
  const { tasks } = useTask();

  console.log(tasks);
  return (
    <>
      <div>
        <p>
          I’m Derek, an astro-engineer based in Tattooine. I like to build
          X-Wings at
          <a className="underline decoration-sky-500">My Company, Inc</a>.
          Outside of work, I like to{" "}
          <a className="underline decoration-pink-500">watch pod-racing</a> and
          have <a className="underline decoration-indigo-500">light-saber</a>{" "}
          fights.
        </p>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="grid grid-cols-2">
            <div>{task.name}</div> ({task.status})
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
