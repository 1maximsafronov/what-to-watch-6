import React from "react";
import PropTypes from "prop-types";

import BgImage from "../movie-card/bg-image/bg-image";
import PageHeader from "../page-header/page-header";
import Buttons from "../movie-card/buttons/buttons";
import Poster from "../movie-card/poster/poster";

const PromoMovieCard = ({movie}) => {
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

  return (
    <section className="movie-card" style={{backgroundColor}}>
      <BgImage src={backgroundImage} alt={name}/>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader className="movie-card__head"/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <Poster src={poster} alt={name}/>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <Buttons movieId={id} isFavorite={isFavorite}/>
          </div>
        </div>
      </div>
    </section>
  );
};


PromoMovieCard.propTypes = {
  movie: PropTypes.object
};

export default PromoMovieCard;
