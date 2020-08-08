export const WithError = () => <Input name="firstName" />;

WithError.decorators = [
  (storyFn) => (
    <Formik
      initialValues={{ firstName: "" }}
      initialErrors={{ firstName: "Firstname is required" }}
    >
      {storyFn()}
    </Formik>
  ),
];
