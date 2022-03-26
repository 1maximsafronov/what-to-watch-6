import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const GenreListItem = (props) => {
  const {genre, isActive, onClick} = props;
  const className = classNames(
      `catalog__genres-item`,
      {"catalog__genres-item--active": isActive}
  );

  const clickHandler = (evt) => {
    evt.preventDefault();
    onClick();
  };

  return (
    <li className={className}>
      <a className="catalog__genres-link" href="#"
        onClick={clickHandler}
      >{genre}</a>
    </li>
  );
};

GenreListItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default GenreListItem;
