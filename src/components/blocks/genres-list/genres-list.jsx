import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {changeGenreFilter} from "../../../store/actions";
import {getGenresList, getCurrentGenre} from "../../../store/app-process/selector";

import Item from "../genres-list-item/genres-list-item";

const GenresList = ({items, onGenreChange, currentGenre}) => {
  return (
    <ul className="catalog__genres-list">
      {items.map((genre, index) => (
        <Item key={`genre-${index}`}
          genre={genre}
          isActive={genre === currentGenre}
          onClick={() => onGenreChange(genre)}
        />
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func
};

const mapStateToProps = (state) => ({
  currentGenre: getCurrentGenre(state),
  items: getGenresList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(changeGenreFilter(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
