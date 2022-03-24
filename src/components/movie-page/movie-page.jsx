import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";

import PageLogo from "../page-logo/page-logo";
import UserBlock from "../user-block/user-block";
import MoviesList from "../movies-list/movies-list";
import PageFooter from "../page-footer/page-footer";

import MovieDesc from "../movie-desc/movie-desc";


const MoviePage = (props) => {
  const {movies} = props;

  const {id} = useParams();

  const currentMovie = movies.find((movie) => String(movie.id) === String(id));
  const {poster, name, genre, backgroundImage, backgroundColor, released} = currentMovie;

  return (
    <Fragment>
      <section className="movie-card movie-card--full"
        style={{backgroundColor}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <PageLogo link="main.html"/>
            <UserBlock />
          </header>

          <div className="movie-card__wrap">
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${name} poster`} width="218" height="327" />
            </div>

            <MovieDesc />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies={movies} />
        </section>
        <PageFooter logoLink="main.html" />
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  movies: PropTypes.array
};

const mapSateToProps = (state) => ({
  movies: state.movies
});

export {MoviePage};
export default connect(mapSateToProps)(MoviePage);
