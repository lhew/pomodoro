import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Timer from ".";
import TimerProvider from "../../provider/timer/TimerProvider";

export default {
  title: "Components/Timer",
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = () => (
  <div className="max-w-[25rem] grid justify-center">
    <TimerProvider
      initialRemainingTime={5}
      onFinish={() => {
        alert("Finished");
        return null;
      }}
    >
      <Timer />
    </TimerProvider>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  size: 300,
};
