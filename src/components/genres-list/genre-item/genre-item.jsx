import React from "react";
import PropTypes from "prop-types";

const GenreItem = (props) => {
  const {genre, isActive, onClick} = props;

  const activeClass = isActive ? `catalog__genres-item--active` : ``;
  return (
    <li className={`catalog__genres-item ${activeClass}`} >
      <a onClick={onClick} href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
};

GenreItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GenreItem;
