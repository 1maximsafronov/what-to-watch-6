import React from "react";
// import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import UserBlock from "../user-block/user-block.jsx";
import movies from "../../mocks/films.js";

const mockMovies = [...movies, ...movies].sort(() => Math.random() > 0.5);

const MyList = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo href="main.html"/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={mockMovies}/>
      </section>

      <PageFooter logoLink="main.html"/>

    </div>
  );
};

export default MyList;
