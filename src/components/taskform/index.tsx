import React, { useRef } from "react";

interface TaskFormProps {
  onAddTask?: (task: string) => void;
}

const TaskForm = ({ onAddTask = () => null }: TaskFormProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        className="mt-4 grid gap-3 grid-cols-3 grid-cols-[1fr_auto]"
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current && `${ref.current.value}`.trim().length > 0) {
            onAddTask(ref?.current?.value);
            ref.current.value = "";
          }
        }}
      >
        <input
          className="border-1 border-none rounded-sm p-2"
          type="text"
          name="task"
          required
          autoComplete="off"
          ref={ref}
          placeholder="Next task here"
        />
        <button className="bg-blue-700 bold text-white border-2 border-blue-700 p-2 pl-3 pr-3 rounded-sm">
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
