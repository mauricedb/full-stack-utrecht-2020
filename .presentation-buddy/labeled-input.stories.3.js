export const WithErrorAndTouched = () => (
  <LabeledInput label="Firstname:" name="firstName" />
);

WithErrorAndTouched.decorators = [
  (storyFn) => (
    <Formik
      initialValues={{ firstName: "" }}
      initialErrors={{ firstName: "Firstname is required" }}
      initialTouched={{ firstName: true }}
      validate={(values) => ({
        firstName: values.firstName ? undefined : "Firstname is required",
      })}
    >
      {storyFn()}
    </Formik>
  ),
];
