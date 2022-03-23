import React, {Fragment, PureComponent} from "react";

import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";
import Logo from "../logo/logo.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import UserBlock from "../user-block/user-block.jsx";
import MovieNav from "../movie-nav/movie-nav.jsx";
import MovieCardBg from "../movie-card-bg/movie-card-bg.jsx";

import movies from "../../mocks/films.js";

class MovieDetailsPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: ``
    };
  }

  render() {
    const name = `The Grand Budapest Hotel`;
    const backgroundImage = `img/bg-the-grand-budapest-hotel.jpg`;
    const poster = `img/the-grand-budapest-hotel-poster.jpg`;
    const genre = `Drama`;
    const year = `2014`;

    return (
      <Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <MovieCardBg src={backgroundImage} alt={name} />

            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header movie-card__head">
              <Logo href="main.html"/>
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
                <img src={poster} alt={name} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <MovieNav />

                <Overview />
                {/* <Details /> */}
                {/* <Reviews /> */}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesList movies={movies}/>
          </section>
          <PageFooter logoLink="main.html" />
        </div>
      </Fragment>
    );
  }
}


export default MovieDetailsPage;
