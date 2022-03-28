import {loadMovies, setGenresList, loadOneMovie, loadPromoMovie, loadSimilarMovies, loadComments, loadUserInfo, requireAuthorization, resetUserInfo, loadFavorite, redirectToRoute} from "./actions";
import {adaptMovieToClient, adaptCommentToClient} from "../utils/adapter";
import {AuthorizationStatus} from "../const";
import {saveToken, dropToken} from "../service/token";

import {APIRoute, AppRoute} from "../const";

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(APIRoute.LOGIN)
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserInfo(response.data));
    })
      .catch(() => {
        dropToken();
      });
};
export const login = (loginData) => (dispatch, _getState, api) => {
  return api.post(APIRoute.LOGIN, {
    "email": loginData.email,
    "password": loginData.password
  })
    .then((response) => {
      const data = response.data;
      saveToken(data.token);
      delete data.token;
      dispatch(loadUserInfo(data));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(redirectToRoute(AppRoute.ROOT));
    });
};
export const logout = () => (dispatch, _getState, api) => {
  return api.delete(APIRoute.LOGOUT)
    .then(() => {
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(resetUserInfo());
    });
};
export const fetchMovies = () => (dispatch, _getState, api) => {
  return api.get(APIRoute.FILMS)
    .then((response) => {
      const movies = response.data.map(adaptMovieToClient);
      dispatch(loadMovies(movies));
      dispatch(setGenresList(movies));
    });
};
export const fetchOneMovie = (id) => (dispatch, _getState, api) => {
  return api.get(`${APIRoute.FILMS}/${id}`)
    .then((response) => {
      const movie = adaptMovieToClient(response.data);
      dispatch(loadOneMovie(movie));
    });
};
export const fetchPromoMovie = () =>(dispatch, _getState, api) => {
  return api.get(APIRoute.PROMO)
    .then((response) => {
      const promoMovie = adaptMovieToClient(response.data);
      dispatch(loadPromoMovie(promoMovie));
    });
};
export const fetchSimilarMovies = (id) => (dispatch, _getState, api) => {
  return api.get(`${APIRoute.FILMS}/${id}/similar`)
    .then((response) => {
      const movies = response.data.map(adaptMovieToClient);
      dispatch(loadSimilarMovies(movies));
    });
};
export const fetchMovieComments = (id) => (dispatch, _getState, api) => {
  return api.get(`${APIRoute.REVIEWS}/${id}`)
    .then((response) => {
      const comments = response.data.map(adaptCommentToClient);
      dispatch(loadComments(comments));
    });
};
export const fetchFavoriteMovies = () => (dispatch, _getState, api) => {
  return api.get(APIRoute.FAVORITES)
    .then((response) => {
      const movies = response.data.map(adaptMovieToClient);
      dispatch(loadFavorite(movies));
    })
    .catch((err) => {
      const statusCode = err.response.status;
      if (statusCode === 401) {
        dispatch(redirectToRoute(AppRoute.LOGIN));
      }
      throw err;
    });
};
export const addToFavorite = (id, status) =>(dispatch, _getState, api) => {
  return api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
    .then((response) => {
      const movie = adaptMovieToClient(response.data);
      dispatch(fetchPromoMovie());
      dispatch(loadOneMovie(movie));
      dispatch(fetchFavoriteMovies());
    })
      .catch((err) => {
        const statusCode = err.response.status;
        if (statusCode === 401) {
          dispatch(redirectToRoute(AppRoute.LOGIN));
        }
        throw err;
      });
};
export const sendNewComment = (id, newComment) => (dispatch, _getState, api) => {
  return api.post(`${APIRoute.REVIEWS}/${id}`, newComment)
    .then(() => {
      dispatch(redirectToRoute(`/films/${id}`));
    });
};


/*

export const func = () => (dispatch, _getState, api) => {
  return api;
};

*/
