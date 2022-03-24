import React, {Fragment} from "react";

const getRatinLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  }
  if (rating >= 3 && rating < 5) {
    return `Normal`;
  }
  if (rating >= 5 && rating < 8) {
    return `Good`;
  }
  if (rating >= 8 && rating < 10) {
    return `Very good`;
  }

  return `Awesome`;
};

const MovieOverView = () => {

  const rating = 8.9;
  const ratingLevel = getRatinLevel(rating);
  const scores = 240;
  const formatedRating = String(rating).replace(`.`, `,`);

  const starring = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`];

  const description = `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`;
  const director = `Wes Andreson`;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{formatedRating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{scores} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="movie-card__starring">
          <strong>Starring: {starring.slice(0, 4).join(`, `)} and other</strong>
        </p>
      </div>
    </Fragment>
  );
};


export default MovieOverView;
