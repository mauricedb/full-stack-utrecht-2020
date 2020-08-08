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
