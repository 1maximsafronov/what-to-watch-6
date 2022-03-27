import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const MovieNavItem = (props) => {
  const {isActive, value, onClick} = props;

  const itemClass = classNames(
      `movie-nav__item`,
      {"movie-nav__item--active": isActive}
  );

  const clickHandler = (evt) => {
    evt.preventDefault();
    onClick();
  };

  return (
    <li className={itemClass}>
      <a href="#" className="movie-nav__link" onClick={clickHandler} >
        {value}
      </a>
    </li>
  );
};

MovieNavItem.propTypes = {
  isActive: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default MovieNavItem;
