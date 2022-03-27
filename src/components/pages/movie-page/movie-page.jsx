import React, {Fragment, useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getMovieById, getMovieLoadedStatus, getSimilarMovies, getSimilarMoviesLoadedStatus, getMovieComments, getCommentsLoadedStatus} from "store/app-process/selector";
import {fetchOneMovie, fetchSimilarMovies, fetchMovieComments} from "store/api-actions";
import {resetMovieById, resetSimilarMovies, resetMovieComments} from "store/actions";

import MovieCard from "../../blocks/movie-card/movie-card";
import PageFooter from "../../blocks/page-footer/page-footer";
import Catalog from "../../blocks/catalog/catalog";

const MoviePage = (props) => {
  const {
    movie,
    onDataLoad,
    onDataReset,
    similarMovies,
    movieComments,
    isMovieLoaded,
    isCommentsLoaded,
    isSimilarMoviesLoaded,
  } = props;

  const {id} = useParams();

  useEffect(() => {
    onDataLoad(id);

    return () => {
      onDataReset();
    };
  }, [id]);


  if (!isMovieLoaded || !isSimilarMoviesLoaded || !isCommentsLoaded) {
    return <p>Loading...</p>;
  }


  return (
    <Fragment>
      <MovieCard moviePage movie={movie} comments={movieComments}/>

      <div className="page-content">
        <Catalog className="catalog--like-this"
          title="More like this"
          items={similarMovies.slice(0, 4)}
        />

        <PageFooter/>
      </div>
    </Fragment>
  );
};


MoviePage.propTypes = {
  movie: PropTypes.object,
  isMovieLoaded: PropTypes.bool,
  similarMovies: PropTypes.array,
  isSimilarMoviesLoaded: PropTypes.bool,
  movieComments: PropTypes.array,
  isCommentsLoaded: PropTypes.bool,
  onDataLoad: PropTypes.func.isRequired,
  onDataReset: PropTypes.func.isRequired
};

const mapSateToProps = (state) => ({
  movie: getMovieById(state),
  similarMovies: getSimilarMovies(state),
  isMovieLoaded: getMovieLoadedStatus(state),
  isSimilarMoviesLoaded: getSimilarMoviesLoadedStatus(state),
  movieComments: getMovieComments(state),
  isCommentsLoaded: getCommentsLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDataLoad(id) {
    dispatch(fetchOneMovie(id));
    dispatch(fetchSimilarMovies(id));
    dispatch(fetchMovieComments(id));
  },
  onDataReset() {
    dispatch(resetMovieById());
    dispatch(resetSimilarMovies());
    dispatch(resetMovieComments());
  }
});

export {MoviePage};
export default connect(mapSateToProps, mapDispatchToProps)(MoviePage);
