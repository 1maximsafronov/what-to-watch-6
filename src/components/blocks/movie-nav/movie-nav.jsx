import React from "react";
import PropTypes from "prop-types";

import {MovieTab} from "const.js";

import Item from "./item/item";

const MovieNav = (props) => {
  const {items, activeItem, onItemChange} = props;
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {items.map((item, index) => (
          <Item key={`${item}-${index}`}
            isActive={activeItem === item}
            value={item}
            onClick={() => onItemChange(item)}
          />
        ))}
      </ul>
    </nav>
  );
};

MovieNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.oneOf([...Object.values(MovieTab)])),
  activeItem: PropTypes.oneOf([...Object.values(MovieTab)]),
  onItemChange: PropTypes.func.isRequired
};


export default MovieNav;