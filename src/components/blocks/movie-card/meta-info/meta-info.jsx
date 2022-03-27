import React, {Fragment} from "react";
import PropTypes from "prop-types";

const MovieMetaInfo = (props) => {
  const {name, genre, released} = props;
  return (
    <Fragment>
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
    </Fragment>
  );
};

MovieMetaInfo.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number,
};

export default MovieMetaInfo;
