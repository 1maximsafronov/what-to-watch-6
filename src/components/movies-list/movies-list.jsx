import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null
    };
  }

  render() {
    const {movies} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => (
          <SmallMovieCard
            key={`${movie.name}-${i}`}
            movie={movie}
            onHover={(data)=> {
              this.setState({
                activeMovie: data
              });
            }}
          />
        ))}
      </div>
    );
  }
}


MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesList;
