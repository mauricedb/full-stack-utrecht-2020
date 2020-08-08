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
