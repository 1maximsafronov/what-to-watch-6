import React from "react";
import PropTypes from "prop-types";

const FullScreenButton = ({onClick}) => {
  return (
    <button type="button" className="player__full-screen" onClick={onClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
};

FullScreenButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default FullScreenButton;
