import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TaskFormComponent from ".";

export default {
  title: "Components",
  component: TaskFormComponent,
} as ComponentMeta<typeof TaskFormComponent>;

const Template: ComponentStory<typeof TaskFormComponent> = (args) => (
  <TaskFormComponent {...args} />
);

export const TaskForm = Template.bind({});
TaskForm.args = {
  onAddTask: (task) => {
    console.log("Task added ", task);
  },
};
