import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";
import Logo from "../logo/logo.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import UserBlock from "../user-block/user-block.jsx";
import GenresList from "../genres-list/genres-list.jsx";

const START_SHOWING_COUNT = 8;
const SHOWING_COUNT_BY_BUTTON = 20;

const filterMoviesByGenre = (movies, genre) => {
  if (genre !== `All genres`) {
    return movies.filter((movie) => genre === movie.genre);
  }

  return movies;
};

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

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    const moviesCount = props.movies.length;

    this.state = {
      selectedGenre: `All genres`,
      showingCardsCount: moviesCount > START_SHOWING_COUNT ? START_SHOWING_COUNT : moviesCount,
      showingMovies: props.movies.slice(0, START_SHOWING_COUNT),
    };

    this._showMoreClickHandler = this._showMoreClickHandler.bind(this);
    this._handleGenreChange = this._handleGenreChange.bind(this);
  }

  render() {
    const {movies} = this.props;
    const {showingCardsCount, selectedGenre} = this.state;
    const isShowMoreBtn = movies.length > showingCardsCount;

    // const filteredMovies = filterMoviesByGenre(movies, selectedGenre);
    const filteredMovies = movies;

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
                  height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">Drama</span>
                  <span className="movie-card__year">2014</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenresList
              genres={genres}
              activeGenre={this.state.selectedGenre}
              onGenreChange={this._handleGenreChange}
            />

            <MoviesList movies={filteredMovies.slice(0, this.state.showingCardsCount)}/>

            {isShowMoreBtn && (
              <div className="catalog__more">
                <button onClick={this._showMoreClickHandler} className="catalog__button" type="button">
                  Show more
                </button>
              </div>
            )}
          </section>

          <PageFooter />

        </div>
      </React.Fragment>
    );
  }

  _handleGenreChange(newGenre) {
    this.setState({selectedGenre: newGenre});
  }

  _showMoreClickHandler() {
    const {movies} = this.props;
    const moviesCount = movies.length;
    // const showingMovies = this.state.showingMovies.length;

    const {showingCardsCount} = this.state;
    const nextShowingCount = showingCardsCount + SHOWING_COUNT_BY_BUTTON;

    if (showingCardsCount < moviesCount) {
      this.setState({
        showingCardsCount: nextShowingCount > moviesCount ? nextShowingCount : moviesCount
      });
    }
  }
}

MainPage.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MainPage;
