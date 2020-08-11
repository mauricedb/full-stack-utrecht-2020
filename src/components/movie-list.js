import React from "react";
import propTypes from "prop-types";

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

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      overview: propTypes.string.isRequired,
      backdrop_path: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
