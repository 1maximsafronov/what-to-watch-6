import {ActionCreator} from "./actions";
import {adaptMovieToClient} from "../utils/movies";

export const fetchMovies = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
    .then((response) => {
      const movies = response.data.map(adaptMovieToClient);
      dispatch(ActionCreator.loadMovies(movies));
    });
};
export const fetchOneMovie = (id) => (dispatch, _getState, api) => {
  return api.get(`/films/${id}`)
    .then((response) => {
      const movie = adaptMovieToClient(response.data);
      dispatch(ActionCreator.loadOneMovie(movie));
    });
};
export const fetchPromoMovie = () =>(dispatch, _getState, api) => {
  return api.get(`/promo`)
    .then((response) => {
      const promoMovie = adaptMovieToClient(response.data);
      dispatch(ActionCreator.loadPromoMovie(promoMovie));
    });
};

/*

export const func = () => (dispatch, _getState, api) => {
  return api;
};

*/
