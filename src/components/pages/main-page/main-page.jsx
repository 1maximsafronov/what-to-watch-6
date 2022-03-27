import React, {Fragment, useState, useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getPromoMovie, getMoviesLoadedStatus, getPromoLoadedStatus} from "store/app-data/selector";
import {getMoviesByGenre} from "store/selectors";

import PageFooter from "../../blocks/page-footer/page-footer";
import GenresList from "../../blocks/genres-list/genres-list";
import MoviesList from "../../blocks/movies-list/movies-list";
import ShowMoreButton from "../../blocks/catalog-show-more/catalog-show-more";

import PromoMovieCard from "components/blocks/promo-movie-card/promo-movie-card";

const MainPage = (props) => {

  const {movies, promoMovie, isMoviesLoaded, isPromoLoaded} = props;

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
      <PromoMovieCard movie={promoMovie}/>

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
