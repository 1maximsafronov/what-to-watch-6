import React, {PureComponent} from "react";
import GenreItem from "./genre-item/genre-item.jsx";

const genres = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`,
];

class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedGenre: `All genres`
    };
  }

  render() {
    const {selectedGenre} = this.state;
    return (
      <ul className="catalog__genres-list">
        {genres.map((genre, i) =>(
          <GenreItem
            key={`${genre}-${i}`}
            genre={genre}
            isActive={selectedGenre === genre}
            onClick={() => this.setState({selectedGenre: genre})}
          />
        ))}
      </ul>
    );
  }
}


export default GenresList;
