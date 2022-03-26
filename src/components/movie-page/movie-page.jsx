import React, {Fragment, useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getMovieById, getMovieLoadedStatus, getSimilarMovies, getSimilarMoviesLoadedStatus, getMovieComments, getCommentsLoadedStatus} from "../../store/app-process/selector";

import MoviesList from "../movies-list/movies-list";
import PageFooter from "../page-footer/page-footer";
import Poster from "../movie-card-poster/movie-card-poster";
import Buttons from "../movie-card-buttons/movie-card-buttons";
import MovieDesc from "../movie-desc/movie-desc";
import PageHeader from "../page-header/page-header";
import MovieCardBg from "../movie-card-bg/movie-card-bg";

import {fetchOneMovie, fetchSimilarMovies, fetchMovieComments} from "../../store/api-actions";
import {resetMovieById, resetSimilarMovies, resetMovieComments} from "../../store/actions";

const MoviePage = (props) => {
  const {
    movie,
    onDataLoad,
    onDataReset,
    similarMovies,
    movieComments,
    isMovieLoaded,
    isCommentsLoaded,
    isSimilarMoviesLoaded,
  } = props;

  const {id} = useParams();

  useEffect(() => {
    onDataLoad(id);

    return () => {
      onDataReset();
    };
  }, [id]);


  if (!isMovieLoaded || !isSimilarMoviesLoaded || !isCommentsLoaded) {
    return <p>Loading...</p>;
  }


  const {poster, name, genre, backgroundImage, backgroundColor, released,
    isFavorite} = movie;

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

              <Buttons movieId={id} isFavorite={isFavorite}/>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <Poster src={poster} alt={name} size="big"/>
            <MovieDesc movie={movie} comments={movieComments} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies={similarMovies.slice(0, 4)} />
        </section>
        <PageFooter/>
      </div>
    </Fragment>
  );
};


MoviePage.propTypes = {
  movie: PropTypes.object,
  isMovieLoaded: PropTypes.bool,
  similarMovies: PropTypes.array,
  isSimilarMoviesLoaded: PropTypes.bool,
  movieComments: PropTypes.array,
  isCommentsLoaded: PropTypes.bool,
  onDataLoad: PropTypes.func.isRequired,
  onDataReset: PropTypes.func.isRequired
};

const mapSateToProps = (state) => ({
  movie: getMovieById(state),
  similarMovies: getSimilarMovies(state),
  isMovieLoaded: getMovieLoadedStatus(state),
  isSimilarMoviesLoaded: getSimilarMoviesLoadedStatus(state),
  movieComments: getMovieComments(state),
  isCommentsLoaded: getCommentsLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDataLoad(id) {
    dispatch(fetchOneMovie(id));
    dispatch(fetchSimilarMovies(id));
    dispatch(fetchMovieComments(id));
  },
  onDataReset() {
    dispatch(resetMovieById());
    dispatch(resetSimilarMovies());
    dispatch(resetMovieComments());
  }
});

export {MoviePage};
export default connect(mapSateToProps, mapDispatchToProps)(MoviePage);
