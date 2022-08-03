import React from "react";
import { ComponentStory } from "@storybook/react";

import SelectComponent from "./select";

const meta = {
  title: "Components/UI/Typography",
};

export default meta;

const Template: ComponentStory<typeof SelectComponent> = () => (
  <>
    <h1>This is a h1 paragraph</h1>
    <h2>This is a h2 paragraph</h2>
    <h3>This is a h3 paragraph</h3>
    <h4>This is a h4 paragraph</h4>
    <h5>This is a h5 paragraph</h5>

    <hr className="my-5" />

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
      adipisci, officia delectus <em>veniam consequatur asperiores</em>. Rem,
      laudantium natus obcaecati a ipsum{" "}
      <strong>officia modi consectetur</strong> quidem labore praesentium
      repudiandae, rerum quae.
    </p>
  </>
);

export const Demo = Template.bind({});
