import React from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card";

const MoviesList = (props) => {
  const {movies} = props;
  return (
    <div className="catalog__movies-list">
      {movies.map((movie, i) => {
        return <SmallMovieCard key={`movei-${movie.id}-${i}`} movie={movie}/>;
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array
};

export default MoviesList;
