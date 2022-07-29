import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TimerDisplayComponent from ".";

export default {
  title: "Components",
  component: TimerDisplayComponent,
} as ComponentMeta<typeof TimerDisplayComponent>;

const Template: ComponentStory<typeof TimerDisplayComponent> = (args) => (
  <TimerDisplayComponent {...args} />
);

export const TimerDisplay = Template.bind({});

TimerDisplay.args = {
  time: Date.now(),
};
