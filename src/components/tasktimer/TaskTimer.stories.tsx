import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TaskTimerComponent from ".";
import TaskProvider from "../../provider/task/TaskProvider";
import TimerProvider from "../../provider/timer/TimerProvider";
import { TaskStatus } from "../../provider/task/types";

export default {
  title: "Components",
  component: TaskTimerComponent,
} as ComponentMeta<typeof TaskTimerComponent>;

const Template: ComponentStory<typeof TaskTimerComponent> = (args) => (
  <TaskProvider
    initialTasks={[
      {
        id: "1",
        name: "Buy milk",
        status: TaskStatus.enum.IDLE,
        current: true,
      },
      { id: "2", name: "Walk teddy", status: TaskStatus.enum.DONE },
      { id: "3", name: "Call mom", status: TaskStatus.enum.IDLE },
    ]}
  >
    <TimerProvider>
      <TaskTimerComponent />
    </TimerProvider>
  </TaskProvider>
);

export const TaskTimer = Template.bind({});
TaskTimer.args = {
  progress: 25,
};
