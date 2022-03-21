import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const MoviesList = (props) => {
  const {movies} = props;
  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <SmallMovieCard key={movie} movie={movie}/>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesList;
