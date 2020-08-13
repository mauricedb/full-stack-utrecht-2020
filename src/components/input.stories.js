import React from "react";
import { Formik } from "formik";

import Input from "./input";

export default {
  title: "Atoms/Input",
  component: Input,
  //   decorators: [(storyFn) => <Formik>{storyFn()}</Formik>],
};

export const Standard = () => <Input name="firstName" />;
export const WithError = () => <Input name="firstName2" />;

WithError.decorators = [
  (storyFn) => (
    <Formik
      initialValues={{ firstName2: "" }}
      initialErrors={{ firstName2: "Firstname is required" }}
    >
      {storyFn()}
    </Formik>
  ),
];
