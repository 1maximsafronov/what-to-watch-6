import React from "react";

import Review from "../review-card/review-card";

const MovieReviews = () => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <Review />
        <Review />
        <Review />
      </div>
      <div className="movie-card__reviews-col">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default MovieReviews;
