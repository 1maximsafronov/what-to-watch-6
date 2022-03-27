import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list";
import classNames from "classnames";

const Catalog = (props) => {
  const {items, title, renderShowMoreBtn, renderGenresList, className} = props;
  const catalogClassName = classNames(`catalog`, className);


  return (
    <section className={catalogClassName}>
      {title ? (
        <h2 className="catalog__title">{title}</h2>
      ) : (
        <h2 className="catalog__title visually-hidden">Catalog</h2>
      )}

      {renderGenresList && renderGenresList()}

      <MoviesList movies={items}/>

      {renderShowMoreBtn && renderShowMoreBtn()}
    </section>
  );
};

Catalog.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  title: PropTypes.string,
  renderGenresList: PropTypes.func,
  renderShowMoreBtn: PropTypes.func,
};

export default Catalog;


/*
<section className="catalog">
  <h2 className="catalog__title visually-hidden">Catalog</h2>
  <MoviesList movies={movies}/>
</section>


<section className="catalog">
  <h2 className="catalog__title visually-hidden">Catalog</h2>
  <GenresList />
  <MoviesList movies={movies.slice(0, showingMovieCard)} />
  {isShowMoreBtn && (
    <ShowMoreButton onClick={showMoreBtnClickHandler} />
  )}
</section>


<section className="catalog catalog--like-this">
  <h2 className="catalog__title">More like this</h2>
  <MoviesList movies={similarMovies.slice(0, 4)} />
</section>

*/
