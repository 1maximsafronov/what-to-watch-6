import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import PageFooter from "../page-footer/page-footer";
import PageLogo from "../page-logo/page-logo";
import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";
import UserBlock from "../user-block/user-block";

const MainPage = (props) => {
  const {movies, promoMovie, isMoviesLoaded} = props;
  const {backgroundImage, poster, genre, name, released} = promoMovie;

  return (
    <Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <PageLogo />
          <UserBlock />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
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
          <GenresList />
          {isMoviesLoaded ? <MoviesList movies={movies} /> : <p>Loading...</p>}

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <PageFooter />
      </div>
    </Fragment>
  );
};

MainPage.propTypes = {
  movies: PropTypes.array,
  promoMovie: PropTypes.object,
  isMoviesLoaded: PropTypes.bool,
};

const mapSateToProps = (state) => ({
  movies: state.movies,
  promoMovie: state.promoMovie,
  isMoviesLoaded: state.isMoviesLoaded,
});

export {MainPage};
export default connect(mapSateToProps)(MainPage);
