import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getFavoriteMovies, getFavoriteStatus} from "../../store/app-process/selector";
import {fetchFavoriteMovies} from "../../store/api-actions";
import PageFooter from "../page-footer/page-footer";
import MoviesList from "../movies-list/movies-list";
import PageHeader from "../page-header/page-header";

const MyListPage = (props) => {
  const {movies, isDataLoaded, onDataLoad} = props;

  useEffect(() => {
    onDataLoad();
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-page">
      <PageHeader className="user-page__head" >
        <h1 className="page-title user-page__title">My list</h1>
      </PageHeader>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={movies}/>
      </section>

      <PageFooter/>
    </div>
  );
};


MyListPage.propTypes = {
  movies: PropTypes.array,
  isDataLoaded: PropTypes.bool,
  onDataLoad: PropTypes.func
};

const mapSateToProps = (state) => ({
  movies: getFavoriteMovies(state),
  isDataLoaded: getFavoriteStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDataLoad() {
    dispatch(fetchFavoriteMovies());
  }
});

export {MyListPage};
export default connect(mapSateToProps, mapDispatchToProps)(MyListPage);
