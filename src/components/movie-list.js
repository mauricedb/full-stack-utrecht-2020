import React from "react";

import MovieListCard from "./movie-list-card";

const MoviesList = ({ movies }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {movies.map((movie) => (
        <MovieListCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
