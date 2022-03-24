import React, {Fragment, useState} from "react";

import PageLogo from "../page-logo/page-logo";
import UserBlock from "../user-block/user-block";
import MovieNav from "../movie-nav/movie-nav";
import MoviesList from "../movies-list/movies-list";
import PageFooter from "../page-footer/page-footer";

import MovieOverView from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";

import {MovieTab} from "../../const.js";

const MoviePage = () => {
  const [activeTab, setActiveTab] = useState(MovieTab.OVERVIEW);

  const bgImage = `img/bg-the-grand-budapest-hotel.jpg`;
  const poster = `img/the-grand-budapest-hotel-poster.jpg`;
  const name = `The Grand Budapest Hotel`;
  const genre = `Drama`;
  const year = `2014`;

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={bgImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <PageLogo link="main.html"/>
            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <MovieNav
                items={Object.values(MovieTab)}
                activeItem={activeTab}
                onItemChange={(tab)=> setActiveTab(tab)}
              />

              {MovieTab.OVERVIEW === activeTab && <MovieOverView />}
              {MovieTab.DETAILS === activeTab && <MovieDetails />}
              {MovieTab.REVIEWS === activeTab && <MovieReviews />}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList />
        </section>
        <PageFooter logoLink="main.html" />
      </div>
    </Fragment>
  );
};

export default MoviePage;
