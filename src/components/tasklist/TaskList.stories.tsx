import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TaskList from ".";
import TaskProvider from "../../provider/task/TaskProvider";
import { ITask, TaskStatus } from "../../provider/task/types";

export default {
  title: "Components/TaskList",
  component: TaskList,
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskProvider initialTasks={args.initialTasks}>
    <TaskList />
  </TaskProvider>
);

export const Default = Template.bind({});
Default.args = {
  initialTasks: [
    { id: "1", name: "Buy milk", status: TaskStatus.IDLE },
    { id: "2", name: "Walk teddy", status: TaskStatus.DONE },
    { id: "3", name: "Call mom", status: TaskStatus.IDLE },
  ],
};
