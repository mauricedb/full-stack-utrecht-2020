import React from "react";
import useAbortableFetch from "use-abortable-fetch";

import MovieEditor from "./movie-editor";

const MovieLoader = ({ movieId }) => {
  const { data, error, loading } = useAbortableFetch(
    `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/${movieId}`
  );

  if (error) {
    return <div>Error...</div>;
  }

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <MovieEditor movie={data} />
    </div>
  );
};

export default MovieLoader;
