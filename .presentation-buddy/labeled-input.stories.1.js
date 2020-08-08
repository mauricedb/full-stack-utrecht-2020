import React from "react";
import { Formik } from "formik";

import LabeledInput from "./labeled-input";

export default {
  title: "Elements/LabeledInput",
  component: LabeledInput,
};

export const Standard = () => (
  <LabeledInput label="Firstname:" name="firstName" />
);

export const WithErrorNotTouched = () => (
  <LabeledInput label="Firstname:" name="firstName" />
);

WithErrorNotTouched.decorators = [
  (storyFn) => (
    <Formik
      initialValues={{ firstName: "" }}
      initialErrors={{ firstName: "Required" }}
      validate={(values) => ({
        firstName: values.firstName ? undefined : "Required",
      })}
    >
      {storyFn()}
    </Formik>
  ),
];

export const WithErrorAndTouched = () => (
  <LabeledInput label="Firstname:" name="firstName" />
);

WithErrorAndTouched.decorators = [
  (storyFn) => (
    <Formik
      initialValues={{ firstName: "" }}
      initialErrors={{ firstName: "Required" }}
      initialTouched={{ firstName: true }}
      validate={(values) => ({
        firstName: values.firstName ? undefined : "Required",
      })}
    >
      {storyFn()}
    </Formik>
  ),
];
