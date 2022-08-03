import { Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import Button from "../ui/button";
import Input from "../ui/input";

interface TaskFormProps {
  onAddTask?: (task: string) => void;
}

const TaskForm = ({ onAddTask = () => null }: TaskFormProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Formik
        initialValues={{ task: "" }}
        onSubmit={({ task }, { resetForm }) => {
          console.log({ task });
          if (task && task.trim().length > 0) {
            console.log("mandou ", task);
            onAddTask(task);
            resetForm();
          }
        }}
        validate={(values) => {
          const errors: any = {};

          if (!values.task || `${values.task}`.trim().length === 0) {
            errors.task = "Type a valid value";
          }
          return errors;
        }}
      >
        {({ submitForm, errors, submitCount }) => (
          <Form className="mt-4 grid gap-3 align-start grid-cols-[1fr_auto]">
            <div className="grid gap-1">
              <Field
                className={"border border-none rounded-sm p-2"}
                type="text"
                name="task"
                required
                autoComplete="off"
                ref={ref}
                placeholder="Next task here"
                component={Input}
                onKeyDown={(e: KeyboardEvent) => {
                  if (e.key === "Enter") {
                    submitForm();
                  }
                }}
              />
            </div>
            <Button className={["self-start"]} type="submit">
              Add
            </Button>
            {errors.task && submitCount > 0 && (
              <small className="text-red-500 mt-[-0.5em]">{errors.task}</small>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
