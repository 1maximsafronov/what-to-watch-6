import React from "react";
import PropTypes from "prop-types";

import {formatCommentDate, formateDateTime} from "utils/common.js";


const ReviewCard = ({comment}) => {
  const {author, text, rating, date} = comment;

  const formatDate = formatCommentDate(date);
  const dateTime = formateDateTime(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={dateTime}>{formatDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

ReviewCard.propTypes = {
  comment: PropTypes.object
};


export default ReviewCard;
