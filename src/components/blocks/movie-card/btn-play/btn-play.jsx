import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const BtnPlay = ({onClick, className}) => {

  const btnClassName = classNames(`btn btn--play`, className);
  return (
    <button className={btnClassName} type="button"
      onClick={onClick} >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

BtnPlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default BtnPlay;
