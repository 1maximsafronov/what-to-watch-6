import React from "react";
import PropTypes from "prop-types";

import Review from "../../review-card/review-card";

const MovieReviews = ({comments}) => {
  const middle = comments.length / 2;
  const firstHalf = comments.slice(0, middle);
  const secondHalf = comments.slice(middle);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {secondHalf.map((comment) => (
          <Review key={`review-1-col-${comment.id}`} comment={comment}/>
        ))}
      </div>
      <div className="movie-card__reviews-col">
        {firstHalf.map((comment) => (
          <Review key={`review-2-col-${comment.id}`} comment={comment}/>
        ))}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default MovieReviews;
