import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectComponent from ".";

export default {
  title: "Components/UI/Forms",
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>;

const Template: ComponentStory<typeof SelectComponent> = (args) => (
  <SelectComponent {...args}>{args.children}</SelectComponent>
);

export const Select = Template.bind({});

Select.args = {
  children: (
    <>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </>
  ),
  disabled: false,
  secondary: false,
};
