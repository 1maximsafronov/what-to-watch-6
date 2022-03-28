import React from "react";
import PropTypes from "prop-types";

const ExitButton = ({onClick}) => {
  return (
    <button type="button" className="player__exit" onClick={onClick}>
        Exit
    </button>
  );
};

ExitButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ExitButton;
