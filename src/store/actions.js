import {allGenresItem} from "../const";

const ActionType = {
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_ONE_MOVIE: `data/loadOneMovie`,
  CHENGE_GENRE_FILTER: `data/changeGenreFilter`,
  LOAD_PROMO_MOVIE: `data/loadPromoMovie`,
  LOAD_SIMILAR_MOVIES: `data/loadSimilarMovies`,
  RESET_SIMILAR_MOVIES: `data/resetSimilarMovies`,
  RESET_MOVIE_BY_ID: `data/resetMovieById`,
  SET_GENRES_LIST: `data/setGenresList`,
  LOAD_COMMENTS: `data/loadComments`,
  REST_MOVIE_COMMENTS: `data/resetMovieComments`,
  LOAD_USER_INFO: `user/loadUserInfo`,
  RESET_USER_INFO: `user/resetUserInfo`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`
};

export const loadMovies = (movies) =>{
  return {
    type: ActionType.LOAD_MOVIES,
    payload: movies
  };
};
export const setGenresList = (movies) =>{
  const genres = movies.map((movie) => movie.genre);
  const unicGenres = [allGenresItem, ...new Set(genres)];

  return {
    type: ActionType.SET_GENRES_LIST,
    payload: unicGenres,
  };
};
export const changeGenreFilter = (genreType) =>{
  return {
    type: ActionType.CHENGE_GENRE_FILTER,
    payload: genreType
  };
};
export const loadOneMovie = (movie) =>{
  return {
    type: ActionType.LOAD_ONE_MOVIE,
    payload: movie
  };
};
export const loadPromoMovie = (promoMove) => {
  return {
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: promoMove
  };
};
export const loadSimilarMovies = (similarMovies) =>{
  return {
    type: ActionType.LOAD_SIMILAR_MOVIES,
    payload: similarMovies,
  };
};
export const resetSimilarMovies = () =>{
  return {
    type: ActionType.RESET_SIMILAR_MOVIES,
    payload: null
  };
};
export const resetMovieById = () =>{
  return {
    type: ActionType.RESET_MOVIE_BY_ID,
    payload: null,
  };
};
export const loadComments = (comments)=>{
  return {
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  };
};
export const resetMovieComments = () =>{
  return {
    type: ActionType.REST_MOVIE_COMMENTS,
    payload: null
  };
};
export const loadUserInfo = (userInfo) => {
  return {
    type: ActionType.LOAD_USER_INFO,
    payload: userInfo,
  };
};
export const resetUserInfo = () => {
  return {
    type: ActionType.RESET_USER_INFO,
    payload: null
  };
};
export const requireAuthorization = (status) => {
  return {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  };
};

export {ActionType};
