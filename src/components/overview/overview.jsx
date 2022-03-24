import React, {Fragment} from "react";

const Overview = () => {

  const rating = `8,9`;
  const ratingLevel = `Very good`;
  const ratingCount = `240 ratings`;

  const director = `Wes Andreson`;

  let starring = [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`,
    `Saoirse Ronan`,
    `Tony Revoloru`,
    `Tilda Swinton`,
    `Tom Wilkinson`,
    `Owen Wilkinson`,
  ];

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
              Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

        <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the
              sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously,
              Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

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


export default Overview;
