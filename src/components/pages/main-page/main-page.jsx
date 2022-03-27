import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getPromoMovie, getMoviesLoadedStatus, getPromoLoadedStatus} from "store/app-data/selector";
import {getMoviesByGenre} from "store/selectors";

import PageFooter from "../../blocks/page-footer/page-footer";
import GenresList from "../../blocks/genres-list/genres-list";
import Catalog from "components/blocks/catalog/catalog";
import PromoMovieCard from "components/blocks/promo-movie-card/promo-movie-card";

import {withShowMore} from "hocs/with-show-more/with-show-more";

const CatalogWrapped = withShowMore(Catalog);

const MainPage = (props) => {

  const {movies, promoMovie, isMoviesLoaded, isPromoLoaded} = props;

  if (!isMoviesLoaded || !isPromoLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <PromoMovieCard movie={promoMovie}/>

      <div className="page-content">
        {/* <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <MoviesList movies={movies.slice(0, showingMovieCard)} />
        </section> */}

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
