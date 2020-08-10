import React from "react";
import { Link } from "react-router-dom";

const MovieListCard = ({ movie }) => {
  return (
    <div className="col mt-3">
      <div className="card h-100">
        <img
          src={`//image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          className="card-img-top"
          alt={movie.title}
          height={190}
        />
        <div className="card-body">
          <h5 className="card-title x-text-truncate">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
        </div>
        <div className="card-footer">
          <Link
            to={`/movie/${movie.id}/${movie.title}`}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieListCard;
