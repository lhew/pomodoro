import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TimerComponent from ".";
import TimerProvider from "../../provider/timer/TimerProvider";

export default {
  title: "Components",
  component: TimerComponent,
} as ComponentMeta<typeof TimerComponent>;

const Template: ComponentStory<typeof TimerComponent> = () => (
  <div className="max-w-[25rem] grid justify-center">
    <TimerProvider
      initialRemainingTime={5}
      onFinish={() => {
        alert("Finished");
        return null;
      }}
    >
      <TimerComponent />
    </TimerProvider>
  </div>
);

export const Timer = Template.bind({});

Timer.args = {
  size: 300,
};
