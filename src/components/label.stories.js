import React from "react";

import Label from "./label";

export default {
  title: "Atoms/Label",
  component: Label,
};

export const StandardStory = () => <Label label="The label" />;

export const WithControls = (args) => <Label {...args} />;
WithControls.args = { label: "The label", labelClassName: "text-success" };

export const WithFixedClasses = (args) => <Label {...args} />;
WithFixedClasses.args = {
  label: "The label",
  labelClassName: "text-success",
};

WithFixedClasses.argTypes = {
  labelClassName: {
    name: "CSS classes",
    defaultValue: "text-primary",
    control: {
      type: "select",
      options: ["", "text-success", "text-danger", "text-primary"],
    },
  },
};
