import {ActionType} from "./actions";
import {allGenresItem} from "../const";

const initialState = {
  movies: [],
  isMoviesLoaded: false,
  promoMovie: {},
  isPromoLoaded: false,
  movieById: {},
  isMovieByIdLoaded: false,
  similarMovies: [],
  isSimilarMoviesLoaded: false,
  genresList: [],
  currentGenreFilter: allGenresItem,
  currentMovieComments: [],
  isCommentsLoaded: false,
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
    case ActionType.CHENGE_GENRE_FILTER:
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
    case ActionType.SET_GENRES_LIST:
      return {
        ...state,
        genresList: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        currentMovieComments: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.REST_MOVIE_COMMENTS:
      return {
        ...state,
        currentMovieComments: [],
        isCommentsLoaded: false,
      };
  }

  return state;
};

export {reducer};
