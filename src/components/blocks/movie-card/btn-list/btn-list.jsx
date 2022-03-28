import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const inListIcon = (
  <svg viewBox="0 0 18 14" width="18" height="14">
    <use xlinkHref="#in-list"></use>
  </svg>
);

const addIcon = (
  <svg viewBox="0 0 19 20" width="19" height="20">
    <use xlinkHref="#add"></use>
  </svg>
);

const BtnList = ({onClick, isActive, className}) => {
  const btnClassName = classNames(`btn btn--list`, className);
  return (
    <button className={btnClassName} type="button" onClick={onClick} >
      {isActive ? inListIcon : addIcon}
      <span>My list</span>
    </button>
  );
};

BtnList.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};


export default BtnList;
