export const WithErrorNotTouched = () => (
  <LabeledInput label="Firstname:" name="firstName" />
);

WithErrorNotTouched.decorators = [
  (storyFn) => (
    <Formik
      initialValues={{ firstName: "" }}
      initialErrors={{ firstName: "Firstname is required" }}
      validate={(values) => ({
        firstName: values.firstName ? undefined : "Firstname is required",
      })}
    >
      {storyFn()}
    </Formik>
  ),
];
