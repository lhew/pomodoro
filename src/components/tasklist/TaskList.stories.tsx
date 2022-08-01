import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TaskListComponent from ".";
import TaskProvider from "../../provider/task/TaskProvider";
import { TaskStatus } from "../../provider/task/types";

export default {
  title: "Components",
  component: TaskListComponent,
} as ComponentMeta<typeof TaskListComponent>;

const Template: ComponentStory<typeof TaskProvider> = (args) => (
  <TaskProvider {...args}>
    <TaskListComponent />
  </TaskProvider>
);

export const TaskList = Template.bind({});
TaskList.args = {
  initialTasks: [
    { id: "1", name: "Buy milk", status: TaskStatus.enum.IDLE, current: true },
    { id: "2", name: "Walk teddy", status: TaskStatus.enum.DONE },
    { id: "3", name: "Call mom", status: TaskStatus.enum.IDLE },
  ],
};
