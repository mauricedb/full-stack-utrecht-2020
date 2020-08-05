import React from "react";
import { Form, withFormik } from "formik";
import { Link } from "react-router-dom";

import Loading from "./loading";
import LabeledInput from "./labeled-input";
import LabeledTextArea from "./labeled-textarea";
import movieSchema from "./movie-schema";

const MovieEditor = ({ values, isValid, isSubmitting }) => {
  if (isSubmitting) {
    return <Loading />;
  }

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
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Save
        </button>
        <Link to={`/movies`} className="btn btn-danger">
          Cancel
        </Link>
      </div>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: (props) => props.movie,
  handleSubmit: async (movie, { props }) => {
    const response = await fetch(
      `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/${movie.id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "put",
        body: JSON.stringify(movie),
      }
    );

    if (response.ok) {
      props.push("/movies");
    }
  },
  validationSchema: movieSchema,
})(MovieEditor);
