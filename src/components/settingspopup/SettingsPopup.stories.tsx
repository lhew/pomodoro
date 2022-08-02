import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SettingsPopupComponent from ".";
import TaskProvider from "../../provider/task/TaskProvider";
import { TaskStatus } from "../../provider/task/types";
import SettingsProvider from "../../provider/settings/SettingsProvider";

export default {
  title: "Components",
  component: SettingsPopupComponent,
} as ComponentMeta<typeof SettingsPopupComponent>;

const Template: ComponentStory<typeof TaskProvider> = (args) => (
  <SettingsProvider>
    <SettingsPopupComponent />
  </SettingsProvider>
);

export const SettingsPopup = Template.bind({});
SettingsPopup.args = {
  initialTasks: [
    { id: "1", name: "Buy milk", status: TaskStatus.enum.IDLE, current: true },
    { id: "2", name: "Walk teddy", status: TaskStatus.enum.DONE },
    { id: "3", name: "Call mom", status: TaskStatus.enum.IDLE },
  ],
};
