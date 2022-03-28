import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {MovieTab} from "const.js";

import Item from "./item/item";

const MovieNav = (props) => {
  const {items, activeItem, onItemChange, className} = props;
  const navClassName = classNames(`movie-nav`, className);
  return (
    <nav className={navClassName}>
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
  onItemChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};


export default MovieNav;
