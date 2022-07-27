import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TaskTimer from ".";
import TaskProvider from "../../provider/task/TaskProvider";
import TimerProvider from "../../provider/timer/TimerProvider";
import { TaskStatus } from "../../provider/task/types";

export default {
  title: "Components/TaskTimer",
  component: TaskTimer,
} as ComponentMeta<typeof TaskTimer>;

const Template: ComponentStory<typeof TaskTimer> = (args) => (
  <TaskProvider
    initialTasks={[
      { id: "1", name: "Buy milk", status: TaskStatus.IDLE, current: true },
      { id: "2", name: "Walk teddy", status: TaskStatus.DONE },
      { id: "3", name: "Call mom", status: TaskStatus.IDLE },
    ]}
  >
    <TimerProvider>
      <TaskTimer />
    </TimerProvider>
  </TaskProvider>
);

export const Default = Template.bind({});
Default.args = {
  progress: 25,
};
