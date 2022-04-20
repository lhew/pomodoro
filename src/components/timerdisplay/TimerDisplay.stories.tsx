import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TimerDisplay from ".";
import dayjs from "dayjs";

export default {
  title: "Components/TimerDisplay",
  component: TimerDisplay,
} as ComponentMeta<typeof TimerDisplay>;

const Template: ComponentStory<typeof TimerDisplay> = (args) => (
  <TimerDisplay {...args} />
);

export const Default = Template.bind({});

Default.args = {
  time: Date.now(),
};
