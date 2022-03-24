import React from "react";
import PageFooter from "../page-footer/page-footer";

import PageLogo from "../page-logo/page-logo";
import MoviesList from "../movies-list/movies-list";
import UserBlock from "../user-block/user-block";

const MyListPage = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageLogo link="main.html"/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList />
      </section>

      <PageFooter logoLink="main.html"/>
    </div>
  );
};

export default MyListPage;
