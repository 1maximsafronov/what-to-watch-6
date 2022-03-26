import {loadMovies, setGenresList, loadOneMovie, loadPromoMovie, loadSimilarMovies, loadComments, loadUserInfo, requireAuthorization, resetUserInfo} from "./actions";
import {adaptMovieToClient} from "../utils/movies";
import {adaptCommentToClient} from "../utils/comments";
import {AuthorizationStatus} from "../const";

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(`/login`)
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserInfo(response.data));
    });
};

export const login = (loginData) => (dispatch, _getState, api) => {
  return api.post(`/login`, {
    "email": loginData.email,
    "password": loginData.password
  })
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserInfo(response.data));
    });
};

export const logout = () => (dispatch, _getState, api) => {
  return api.delete(`/logout`)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(resetUserInfo());
    });
};


export const fetchMovies = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
    .then((response) => {
      const movies = response.data.map(adaptMovieToClient);
      dispatch(loadMovies(movies));
      dispatch(setGenresList(movies));
    });
};
export const fetchOneMovie = (id) => (dispatch, _getState, api) => {
  return api.get(`/films/${id}`)
    .then((response) => {
      const movie = adaptMovieToClient(response.data);
      dispatch(loadOneMovie(movie));
    });
};
export const fetchPromoMovie = () =>(dispatch, _getState, api) => {
  return api.get(`/promo`)
    .then((response) => {
      const promoMovie = adaptMovieToClient(response.data);
      dispatch(loadPromoMovie(promoMovie));
    });
};
export const fetchSimilarMovies = (id) => (dispatch, _getState, api) => {
  return api.get(`/films/${id}/similar`)
    .then((response) => {
      const movies = response.data.map(adaptMovieToClient);
      dispatch(loadSimilarMovies(movies));
    });
};
export const fetchMovieComments = (id) => (dispatch, _getState, api) => {
  return api.get(`/comments/${id}`)
    .then((response) => {
      const comments = response.data.map(adaptCommentToClient);
      dispatch(loadComments(comments));
    });
};

/*

export const func = () => (dispatch, _getState, api) => {
  return api;
};

*/
