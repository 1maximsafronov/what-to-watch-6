import React, {Fragment} from "react";
import PropTypes from "prop-types";

import {getRatinLevel} from "utils/movies";

const MovieOverview = (props) => {
  const {movie} = props;
  const {rating, scores, starring, director, description} = movie;

  const ratingLevel = getRatinLevel(rating);
  const formatedRating = String(rating).replace(`.`, `,`);

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{formatedRating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{scores} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="movie-card__starring">
          <strong>Starring: {starring.slice(0, 4).join(`, `)} and other</strong>
        </p>
      </div>
    </Fragment>
  );
};

MovieOverview.propTypes = {
  movie: PropTypes.object
};

export default MovieOverview;
