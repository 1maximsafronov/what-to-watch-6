import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getPromoMovie, getMoviesLoadedStatus, getPromoLoadedStatus} from "store/app-data/selector";
import {getMoviesByGenre} from "store/selectors";

import PageFooter from "../../blocks/page-footer/page-footer";
import Catalog from "components/blocks/catalog/catalog";
import MovieCard from "../../blocks/movie-card/movie-card";

import {withShowMore} from "hocs/with-show-more/with-show-more";
import {withGenresList} from "hocs/with-genres-list/with-genres-list";

const CatalogWrapped = withGenresList(withShowMore(Catalog));

const MainPage = (props) => {

  const {movies, promoMovie, isMoviesLoaded, isPromoLoaded} = props;

  if (!isMoviesLoaded || !isPromoLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <MovieCard promo movie={promoMovie}/>

      <div className="page-content">
        <CatalogWrapped items={movies}/>

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
