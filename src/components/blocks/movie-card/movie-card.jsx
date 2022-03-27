import React, {Fragment} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import PageHeader from "../page-header/page-header";
import MovieDesc from "../movie-desc/movie-desc";
import MetaInfo from "./meta-info/meta-info";
import BgImage from "./bg-image/bg-image";
import Buttons from "./buttons/buttons";
import Poster from "./poster/poster";

const MovieCard = (props) => {
  const {
    movie,
    comments,
    promo,
    fullPage,
    moviePage,
    reviewPage,
    renderBreadcrumbs,
    renderReviewForm,
  } = props;

  const {
    id,
    name,
    genre,
    poster,
    released,
    isFavorite,
    backgroundColor,
    backgroundImage,
  } = movie;

  const movieCardClassName = classNames(
      `movie-card`,
      {"movie-card--full": fullPage || moviePage}
  );

  const renderPromoContent = () => (
    <Fragment>
      <BgImage src={backgroundImage} alt={name}/>
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader className="movie-card__head"/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <Poster src={poster} alt={name}/>

          <div className="movie-card__desc">
            <MetaInfo name={name} genre={genre} released={released}/>
            <Buttons movieId={id} isFavorite={isFavorite}/>
          </div>
        </div>
      </div>
    </Fragment>
  );

  const renderMoviePageContent = () => (
    <Fragment>
      <div className="movie-card__hero">
        <BgImage src={backgroundImage} alt={name}/>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader className="movie-card__head"/>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <MetaInfo name={name} genre={genre} released={released}/>
            <Buttons movieId={id} isFavorite={isFavorite}/>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <Poster src={poster} alt={name} size="big"/>
          <MovieDesc movie={movie} comments={comments} />
        </div>
      </div>
    </Fragment>
  );

  const renderReviewPageContent = () => (
    <Fragment>
      <div className="movie-card__header">
        <BgImage src={backgroundImage} alt={name}/>

        <h1 className="visually-hidden">WTW</h1>
        <PageHeader>
          {renderBreadcrumbs()}
        </PageHeader>

        <Poster src={poster} alt={name} size="small"/>
      </div>
      {renderReviewForm()}
    </Fragment>
  );

  return (
    <section className={movieCardClassName} style={{backgroundColor}}>
      {promo && renderPromoContent()}
      {moviePage && renderMoviePageContent()}
      {reviewPage && renderReviewPageContent()}
    </section>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  comments: PropTypes.array,
  promo: PropTypes.bool,
  fullPage: PropTypes.bool,
  moviePage: PropTypes.bool,
  reviewPage: PropTypes.bool,
  renderBreadcrumbs: PropTypes.func,
  renderReviewForm: PropTypes.func,
};

export default MovieCard;
