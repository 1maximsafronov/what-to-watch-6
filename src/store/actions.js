import {allGenresItem} from "../const";

const ActionType = {
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_ONE_MOVIE: `data/loadOneMovie`,
  CHENGE_GENRE_FILTER: `data/changeGenreFilter`,
  LOAD_PROMO_MOVIE: `data/loadPromoMovie`,
  LOAD_SIMILAR_MOVIES: `data/loadSimilarMovies`,
  RESET_SIMILAR_MOVIES: `data/resetSimilarMovies`,
  RESET_MOVIE_BY_ID: `data/resetMovieById`,
  SET_GENRES_LIST: `data/setGenresList`
};


const ActionCreator = {
  loadMovies(movies) {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies
    };
  },
  setGenresList(movies) {
    const genres = movies.map((movie) => movie.genre);
    const unicGenres = [allGenresItem, ...new Set(genres)];

    return {
      type: ActionType.SET_GENRES_LIST,
      payload: unicGenres,
    };
  },
  changeGenreFilter(genreType) {
    return {
      type: ActionType.CHENGE_GENRE_FILTER,
      payload: genreType
    };
  },
  loadOneMovie(movie) {
    return {
      type: ActionType.LOAD_ONE_MOVIE,
      payload: movie
    };
  },
  loadPromoMovie(promoMove) {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMove
    };
  },
  loadSimilarMovies(similarMovies) {
    return {
      type: ActionType.LOAD_SIMILAR_MOVIES,
      payload: similarMovies,
    };
  },
  resetSimilarMovies() {
    return {
      type: ActionType.RESET_SIMILAR_MOVIES,
      payload: null
    };
  },
  resetMovieById() {
    return {
      type: ActionType.RESET_MOVIE_BY_ID,
      payload: null,
    };
  }
};


export {ActionType, ActionCreator};
