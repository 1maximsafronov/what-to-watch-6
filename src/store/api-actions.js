import {loadMovies, setGenresList, loadOneMovie, loadPromoMovie, loadSimilarMovies, loadComments, loadUserInfo, requireAuthorization, resetUserInfo, loadFavorite, redirectToRoute} from "./actions";
import {adaptMovieToClient} from "../utils/movies";
import {adaptCommentToClient} from "../utils/comments";
import {AuthorizationStatus} from "../const";
import {saveToken, dropToken} from "../service/token";

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(`/login`)
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserInfo(response.data));
    })
      .catch(() => {
        dropToken();
      });
};

export const login = (loginData) => (dispatch, _getState, api) => {
  return api.post(`/login`, {
    "email": loginData.email,
    "password": loginData.password
  })
    .then((response) => {
      const data = response.data;
      saveToken(data.token);
      delete data.token;
      dispatch(loadUserInfo(data));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    });
};

export const logout = () => (dispatch, _getState, api) => {
  return api.delete(`/logout`)
    .then(() => {
      dropToken();
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
export const fetchFavoriteMovies = () => (dispatch, _getState, api) => {
  return api.get(`/favorite`)
    .then((response) => {
      const movies = response.data.map(adaptMovieToClient);
      dispatch(loadFavorite(movies));
    })
    .catch((err) => {
      const statusCode = err.response.status;
      if (statusCode === 401) {
        dispatch(redirectToRoute(`/login`));
      }
      throw err;
    });
};
export const addToFavorite = (id, status) =>(dispatch, _getState, api) => {
  return api.post(`/favorite/${id}/${status}`)
    .then((response) => {
      const movie = adaptMovieToClient(response.data);
      dispatch(fetchPromoMovie());
      dispatch(loadOneMovie(movie));
    })
      .catch((err) => {
        const statusCode = err.response.status;
        if (statusCode === 401) {
          dispatch(redirectToRoute(`/login`));
        }
        throw err;
      });
};


/*

export const func = () => (dispatch, _getState, api) => {
  return api;
};

*/
