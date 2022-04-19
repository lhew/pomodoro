import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Timer from ".";
import dayjs from "dayjs";
import TimerProvider from "../../provider/TimerProvider";

export default {
  title: "Components/Timer",
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => (
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
  start: dayjs("2022-04-13T00:34:56").toDate(),
  end: dayjs("2022-04-13T00:36:10").toDate(),
};
