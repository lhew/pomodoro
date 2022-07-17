import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TaskForm from ".";
import TaskProvider from "../../provider/task/TaskProvider";
import { ITask, TaskStatus } from "../../provider/task/types";

export default {
  title: "Components/TaskForm",
  component: TaskForm,
} as ComponentMeta<typeof TaskForm>;

const Template: ComponentStory<typeof TaskForm> = (args) => (
  <TaskForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onAddTask: (task) => {
    console.log("Task added ", task);
  },
};
