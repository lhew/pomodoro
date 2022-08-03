import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardComponent from ".";

export default {
  title: "Components/UI",
  component: CardComponent,
  argTypes: {},
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args}>{args.children}</CardComponent>
);

export const Card = Template.bind({});

Card.args = {
  children: "I am a Card",
  disabled: false,
  secondary: false,
};
