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
      initialErrors={{ firstName: "Firstname is required" }}
      validate={(values) => ({
        firstName: values.firstName ? undefined : "Firstname is required",
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
