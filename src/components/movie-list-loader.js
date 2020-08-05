import React from "react";
import useAbortableFetch from "use-abortable-fetch";

import MovieList from "./movie-list";

const MovieListLoader = () => {
  const { data, error, loading } = useAbortableFetch(
    `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies`
  );

  if (error) {
    return <div>Error...</div>;
  }

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <MovieList movies={data} />
    </div>
  );
};

export default MovieListLoader;
