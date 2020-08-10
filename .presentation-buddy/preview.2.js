import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Formik } from "formik";

addDecorator((storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>);
addDecorator((storyFn) => (
  <Formik initialValues={{ firstName: "Maurice" }}>{storyFn()}</Formik>
));
