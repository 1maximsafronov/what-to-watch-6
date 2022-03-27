import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ReviewCard = ({comment}) => {
  const {author, text, rating, date} = comment;

  const formatDate = moment(date).format(`MMMM DD, YYYY`);
  const dateTime = moment(date).format(`YYYY-MM-DD`);

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
