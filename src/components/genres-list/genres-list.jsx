import React from "react";
import PropTypes from "prop-types";
import GenreItem from "./genre-item/genre-item.jsx";

const GenresList = (props) => {
  const {genres, activeGenre, onGenreChange} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) =>(
        <GenreItem key={`${genre}-${i}`}
          isActive={activeGenre === genre}
          genre={genre}
          onClick={() => onGenreChange(genre)}
        />
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  activeGenre: PropTypes.string,
  onGenreChange: PropTypes.func,
};

export default GenresList;
