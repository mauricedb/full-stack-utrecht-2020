import React from "react";
import { Form, withFormik } from "formik";

import LabeledInput from "./labeled-input";
import LabeledTextArea from "./labeled-textarea";

const MovieEditor = ({ values }) => {
  return (
    <Form>
      <h2>{values.title}</h2>
      <LabeledInput name="title" label="Title:" />
      <LabeledInput name="vote_average" label="Vote Average:" type="number" />
      <LabeledTextArea name="overview" label="Overview:" rows={5} />
    </Form>
  );
};

MovieEditor.displayName = "MovieEditor";

export default withFormik({
  mapPropsToValues: (props) => props.movie,
  handleSubmit: () => {},
  validate: (values) => ({
    title: values.title ? undefined : "The title is required",
  }),
  displayName: "withFormik(MovieEditor)",
})(MovieEditor);
