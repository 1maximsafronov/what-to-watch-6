import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";

import MoviesList from "../movies-list/movies-list";
import PageFooter from "../page-footer/page-footer";

import MovieDesc from "../movie-desc/movie-desc";
import MovieCardBg from "../movie-card-bg/movie-card-bg";
import Poster from "../movie-card-poster/movie-card-poster";
import PageHeader from "../page-header/page-header";

import {fetchOneMovie, fetchSimilarMovies} from "../../store/api-actions";

const MoviePage = (props) => {
  const {
    movie,
    onDataLoad,
    similarMovies,
    isMovieLoaded,
    isSimilarMoviesLoaded,
  } = props;

  const {id} = useParams();

  if (!isMovieLoaded && !isSimilarMoviesLoaded) {
    onDataLoad(id);
    return <p>Loading...</p>;
  }

  const {poster, name, genre, backgroundImage, backgroundColor, released} = movie;

  return (
    <Fragment>
      <section className="movie-card movie-card--full"
        style={{backgroundColor}}
      >
        <div className="movie-card__hero">
          <MovieCardBg src={backgroundImage} alt={name}/>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader className="movie-card__head"/>

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
            <Poster src={poster} alt={name} big/>
            <MovieDesc movie={movie} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {isSimilarMoviesLoaded ?
            <MoviesList movies={similarMovies} /> :
            <p>Loading...</p>
          }
        </section>
        <PageFooter/>
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  movie: PropTypes.object,
  similarMovies: PropTypes.array,
  isMovieLoaded: PropTypes.bool,
  isSimilarMoviesLoaded: PropTypes.bool,
  onDataLoad: PropTypes.func.isRequired,
};

const mapSateToProps = (state) => ({
  movie: state.movieById,
  similarMovies: state.similarMovies,
  isMovieLoaded: state.isMovieByIdLoaded,
  isSimilarMoviesLoaded: state.isSimilarMoviesLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onDataLoad(id) {
    dispatch(fetchOneMovie(id));
    dispatch(fetchSimilarMovies(id));
  }
});

export {MoviePage};
export default connect(mapSateToProps, mapDispatchToProps)(MoviePage);
