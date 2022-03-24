import React from "react";
import PropTypes from "prop-types";

const MovieCardBg = (props) => {
  const {src, alt} = props;
  return (
    <div className="movie-card__bg">
      <img src={src} alt={alt} />
    </div>
  );
};

MovieCardBg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default MovieCardBg;
