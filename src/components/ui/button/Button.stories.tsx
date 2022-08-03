import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonComponent from ".";

export default {
  title: "Components/UI",
  component: ButtonComponent,
  argTypes: {},
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>{args.children}</ButtonComponent>
);

export const Button = Template.bind({});

Button.args = {
  children: "I am a button",
  disabled: false,
  secondary: false,
};
