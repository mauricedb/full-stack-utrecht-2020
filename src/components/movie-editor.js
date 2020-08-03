import React from "react";
import { Form, withFormik } from "formik";
import { Link } from "react-router-dom";

import LabeledInput from "./labeled-input";
import LabeledTextArea from "./labeled-textarea";

const MovieEditor = ({ values }) => {
  return (
    <Form>
      <h2>{values.title}</h2>
      <LabeledInput name="title" label="Title:" />
      <LabeledInput name="vote_average" label="Vote Average:" type="number" />
      <LabeledTextArea name="overview" label="Overview:" rows={5} />
      <div className="form-group">
        <img
          src={`//image.tmdb.org/t/p/w185${values.poster_path}`}
          alt={values.title}
        />
      </div>

      <div className="btn-group">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <Link to={`/movies`} className="btn btn-danger">
          Cancel
        </Link>
      </div>
    </Form>
  );
};

MovieEditor.displayName = "MovieEditor";

export default withFormik({
  mapPropsToValues: (props) => props.movie,
  handleSubmit: (movie, { props }) => {
    console.log(props);
    console.log(movie);
  },
  //   validate: (values) => ({
  //     title: values.title ? undefined : "The title is required",
  //   }),
  displayName: "withFormik(MovieEditor)",
})(MovieEditor);
