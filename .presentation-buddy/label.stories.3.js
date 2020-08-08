export const WithFixedClasses = (args) => <Label {...args} />;
WithFixedClasses.args = {
  label: "The label",
  labelClassName: "text-success",
};

WithFixedClasses.argTypes = {
  labelClassName: {
    control: {
      type: "select",
      options: ["", "text-success", "text-danger", "text-primary"],
    },
  },
};
