import {loadMovies, setGenresList, loadOneMovie, loadPromoMovie, loadSimilarMovies, loadComments} from "./actions";
import {adaptMovieToClient} from "../utils/movies";
import {adaptCommentToClient} from "../utils/comments";

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
