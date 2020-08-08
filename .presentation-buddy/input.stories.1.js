import React from "react";
import { Formik } from "formik";

import Input from "./input";

export default {
  title: "Atoms/Input",
  component: Input,
  //   decorators: [(storyFn) => <Formik>{storyFn()}</Formik>],
};

export const Standard = () => <Input name="firstName" />;

// Standard.decorators = [(storyFn) => <Formik>{storyFn()}</Formik>];

export const WithError = () => <Input name="firstName" />;

WithError.decorators = [
  (storyFn) => (
    <Formik
      initialValues={{ firstName: "" }}
      initialErrors={{ firstName: "Required" }}
    >
      {storyFn()}
    </Formik>
  ),
];
