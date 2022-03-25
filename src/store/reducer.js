import {ActionType} from "./actions";

const initialState = {
  currentGenreFilter: ``,
  movies: [],
  isMoviesLoaded: false,
  promoMovie: {},
  isPromoLoaded: false,
  movieById: {},
  isMovieByIdLoaded: false,
  similarMovies: [],
  isSimilarMoviesLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isMoviesLoaded: true,
      };
    case ActionType.LOAD_ONE_MOVIE:
      return {
        ...state,
        movieById: action.payload,
        isMovieByIdLoaded: true,
      };
    case ActionType.CHANGE_FILTER:
      return {
        ...state,
        currentGenreFilter: action.payload
      };
    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        promoMovie: action.payload,
        isPromoLoaded: true,
      };
    case ActionType.LOAD_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload,
        isSimilarMoviesLoaded: true,
      };
    case ActionType.RESET_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: [],
        isSimilarMoviesLoaded: false,
      };
    case ActionType.RESET_MOVIE_BY_ID:
      return {
        ...state,
        movieById: {},
        isMovieByIdLoaded: false,
      };
  }

  return state;
};

export {reducer};
