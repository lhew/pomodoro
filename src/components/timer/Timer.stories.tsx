import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Timer from ".";
import dayjs from "dayjs";
import TimerProvider from "../../provider/TimerProvider";

export default {
  title: "Components/Timer",
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = () => (
  <TimerProvider
    initialRemainingTime={5}
    onFinish={() => {
      alert("Finished");
      return null;
    }}
  >
    <Timer />
  </TimerProvider>
);

export const Default = Template.bind({});

Default.args = {
  initialRemainingTime: 5,
  onFinish() {
    console.log("finished.");
  },
};
