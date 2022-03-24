import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import PageFooter from "../page-footer/page-footer";

import PageLogo from "../page-logo/page-logo";
import MoviesList from "../movies-list/movies-list";
import UserBlock from "../user-block/user-block";

const MyListPage = (props) => {
  const {movies} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageLogo link="main.html"/>
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={movies}/>
      </section>

      <PageFooter logoLink="main.html"/>
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
