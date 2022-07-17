import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TaskTimer from ".";
import TaskProvider from "../../provider/task/TaskProvider";

export default {
  title: "Components/TaskTimer",
  component: TaskTimer,
} as ComponentMeta<typeof TaskTimer>;

const Template: ComponentStory<typeof TaskTimer> = (args) => (
  <TaskProvider>
    <TaskTimer />
  </TaskProvider>
);

export const Default = Template.bind({});
Default.args = {
  progress: 25,
};
