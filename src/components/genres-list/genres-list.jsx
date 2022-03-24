import React, {useState} from "react";
import GenreListItem from "../genres-list-item/genres-list-item";

const genresList = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`
];

const GenresList = () => {
  const [currentGenre, setGenre] = useState(`All genres`);

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre, index) => (
        <GenreListItem key={`genre-${index}`}
          genre={genre}
          isActive={genre === currentGenre}
          onClick={() => setGenre(genre)}
        />
      ))}
    </ul>
  );
};

export default GenresList;
