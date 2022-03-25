import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const MovieCardPoster = ({src, alt, big, small, size}) => {
  const className = classNames(
      `movie-card__poster`,
      {"movie-card__poster--big": big},
      {"movie-card__poster--small": small},
      {"movie-card__poster--big": size === `big`},
      {"movie-card__poster--small": size === `small`}
  );

  return (
    <div className={className}>
      <img src={src} alt={`${alt} poster`} width="218" height="327" />
    </div>
  );
};

MovieCardPoster.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  big: PropTypes.bool,
  small: PropTypes.bool,
  size: PropTypes.string,
};

export default MovieCardPoster;
