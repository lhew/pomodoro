import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputComponent from ".";

export default {
  title: "Components/UI/Forms",
  component: InputComponent,
  argTypes: {},
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args}>{args.children}</InputComponent>
);

export const Input = Template.bind({});

Input.args = {
  children: "I am a Input",
  disabled: false,
  secondary: false,
};
