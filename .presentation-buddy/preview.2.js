import React from "react";
import { addDecorator } from "@storybook/react";
import { Formik } from "formik";

addDecorator((storyFn) => (
  <Formik initialValues={{ firstName: "Maurice" }}>{storyFn()}</Formik>
));
