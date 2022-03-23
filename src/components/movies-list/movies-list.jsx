import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null
    };

    this._movieHoverHandler = this._movieHoverHandler.bind(this);
  }

  _renderMovieCard(movie, i) {
    return (
      <SmallMovieCard
        key={`${movie.id}-${i}`}
        movie={movie}
        onHover={this._movieHoverHandler}
      />
    );
  }

  render() {
    const {movies} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => this._renderMovieCard(movie, i))}
      </div>
    );
  }

  _movieHoverHandler(data) {
    this.setState({
      activeMovie: data
    });
  }
}


MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesList;
