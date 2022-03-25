import React from "react";
import PropTypes from "prop-types";

const ReviewCard = ({comment}) => {
  const {author, text, rating} = comment;
  // TODO: ДОбавить вывод даты коментария
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
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
