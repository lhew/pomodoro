import React, { useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TaskTimer from ".";

import PopupComponent from ".";

export default {
  title: "Components",
  component: TaskTimer,
} as ComponentMeta<typeof TaskTimer>;

const Template: ComponentStory<typeof TaskTimer> = (args) => {
  const [showPopup, setShowPopup] = React.useState(args.isOpen);

  useEffect(() => {
    setShowPopup(args.isOpen);
  }, [args.isOpen]);

  return (
    <>
      <button onClick={() => setShowPopup(true)}>
        Open popup {showPopup && " - Opened"}
      </button>
      <PopupComponent
        {...args}
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      >
        <h3 className="font-bold">Example</h3>
        <p>Title showing example</p>
      </PopupComponent>
    </>
  );
};

export const Popup = Template.bind({});

Popup.args = {
  isOpen: true,
  backdropCloses: true,
};
