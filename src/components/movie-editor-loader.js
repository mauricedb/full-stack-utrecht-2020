import React from "react";
import useAbortableFetch from "use-abortable-fetch";
import { useParams } from "react-router-dom";

import Loading from "./loading";
import MovieEditor from "./movie-editor";

const MovieEditorLoader = () => {
  const { movieId } = useParams();

  const { data, error, loading } = useAbortableFetch(
    `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/${movieId}`
  );

  if (error) {
    return <div>Error...</div>;
  }

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <div className="container">
      <MovieEditor movie={data} />
    </div>
  );
};

export default MovieEditorLoader;
