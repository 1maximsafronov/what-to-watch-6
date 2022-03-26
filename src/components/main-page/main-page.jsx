import React, {Fragment, useState, useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getPromoMovie, getMoviesLoadedStatus, getPromoLoadedStatus} from "../../store/app-data/selector";
import {getMoviesByGenre} from "../../store/selectors";

import PageFooter from "../page-footer/page-footer";
import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";
import MovieCardBg from "../movie-card-bg/movie-card-bg";
import Poster from "../movie-card-poster/movie-card-poster";
import PageHeader from "../page-header/page-header";
import ShowMoreButton from "../catalog-show-more/catalog-show-more";
import Buttons from "../movie-card-buttons/movie-card-buttons";

const MainPage = (props) => {

  const {movies, promoMovie, isMoviesLoaded, isPromoLoaded} = props;
  const {backgroundImage, poster, genre, name, released, backgroundColor, isFavorite} = promoMovie;

  if (!isMoviesLoaded || !isPromoLoaded) {
    return <p>Loading...</p>;
  }

  const movieCount = movies.length;

  const [showingMovieCard, setShowingMovieCards] = useState(Math.min(8, movieCount));

  const isShowMoreBtn = showingMovieCard < movieCount;

  useEffect(() => {
    setShowingMovieCards(Math.min(8, movieCount));
  }, [movies]);

  const showMoreBtnClickHandler = () =>{
    const newShowingCards = Math.min(showingMovieCard + 20, movieCount);
    setShowingMovieCards(newShowingCards);
  };

  return (
    <Fragment>
      <section className="movie-card" style={{backgroundColor}}>
        <MovieCardBg src={backgroundImage} alt={name}/>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader className="movie-card__head"/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <Poster src={poster} alt={name}/>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <Buttons isFavorite={isFavorite}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <MoviesList movies={movies.slice(0, showingMovieCard)} />
          {isShowMoreBtn && (
            <ShowMoreButton onClick={showMoreBtnClickHandler} />
          )}
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
  isPromoLoaded: PropTypes.bool,
};

const mapSateToProps = (state) => ({
  movies: getMoviesByGenre(state),
  promoMovie: getPromoMovie(state),
  isPromoLoaded: getPromoLoadedStatus(state),
  isMoviesLoaded: getMoviesLoadedStatus(state),
});

export {MainPage};
export default connect(mapSateToProps)(MainPage);
