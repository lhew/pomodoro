import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProgressCircleComponent from ".";
import TimerProvider, {
  TimerProviderProps,
} from "../../provider/timer/TimerProvider";

export default {
  title: "Components",
  component: ProgressCircleComponent,
  argTypes: {
    initialMode: {
      options: ["work", "break"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof ProgressCircleComponent>;

const Template: ComponentStory<typeof ProgressCircleComponent> = (args) => (
  <TimerProvider initialMode={(args as TimerProviderProps).initialMode}>
    <ProgressCircleComponent {...args} />
  </TimerProvider>
);

export const ProgressCircle = Template.bind({});

ProgressCircle.args = {
  progress: 25,
};
