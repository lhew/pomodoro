import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BackdropComponent from ".";
import Card from "../card";
export default {
  title: "Components/UI",
  component: BackdropComponent,
  argTypes: {},
} as ComponentMeta<typeof BackdropComponent>;

const Template: ComponentStory<typeof BackdropComponent> = (args) => (
  <>
    <Card className={["absolute left-[10%] top-[10%] z-20"]}>
      Do not look here. Look at the backdrop.
    </Card>
    <BackdropComponent {...args} />
  </>
);

export const Backdrop = Template.bind({});

Backdrop.args = {};
