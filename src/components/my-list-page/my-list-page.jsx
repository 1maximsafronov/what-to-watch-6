import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import PageFooter from "../page-footer/page-footer";
import MoviesList from "../movies-list/movies-list";
import PageHeader from "../page-header/page-header";

const MyListPage = (props) => {
  const {movies} = props;

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
  movies: PropTypes.array
};

const mapSateToProps = (state) => ({
  movies: state.movies
});

export {MyListPage};
export default connect(mapSateToProps)(MyListPage);
