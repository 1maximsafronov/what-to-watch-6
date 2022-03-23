import React from "react";
import ReviewCard from "../review-card/review-card.jsx";

const Reviews = () => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="movie-card__reviews-col">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
