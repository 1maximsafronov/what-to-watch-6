import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import classNames from "classnames";

const SmallMovieCard = ({movie, className}) => {
  const {id, name, previewImage} = movie;
  const cardClassName = classNames(`small-movie-card`, className);

  return (
    <article className={cardClassName}>
      <Link to={`/films/${id}`}>
        <div className="small-movie-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    previewImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })
};

export default SmallMovieCard;
