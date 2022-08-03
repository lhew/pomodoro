import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FormFieldComponent from ".";
import Input from "../input";

export default {
  title: "Components/UI/Forms",
  component: FormFieldComponent,
  argTypes: {},
} as ComponentMeta<typeof FormFieldComponent>;

const Template: ComponentStory<typeof FormFieldComponent> = (args) => (
  <>
    <FormFieldComponent {...args}>
      <span>Field name</span>
      <Input name="field-name" placeholder="Some placeholder" />
    </FormFieldComponent>
  </>
);

export const FormField = Template.bind({});

FormField.args = {};
