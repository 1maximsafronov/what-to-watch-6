import {adaptMovieToClient} from "../../utils/movies.js";
import {extendObject} from "../../utils/common.js";


const initialState = {
  movies: [],
  currentGenreFilter: ``
};

const ActionType = {
  SET_GENRE_FILTER: `SET_GENRE_FILTER`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_ONE_MOVIE: `LOAD_ONE_MOVIE`,
};

const ActionCreater = {
  setFilterType(filterType) {
    return {
      type: ActionType.SET_GENRE_FILTER,
      payload: filterType
    };
  },
  loadMovies(movies) {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies
    };
  },
  loadOneMovie(movie) {
    return {
      type: ActionType.LOAD_ONE_MOVIE,
      payload: movie
    };
  }
};

const Operation = {
  loadMovies: ()=> (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const moveis = response.data.map(adaptMovieToClient);
        dispatch(ActionCreater.loadMovies(moveis));
      });
  },
  loadOneMovie: (id) => (dispatch, getState, api) => {
    return api.get(`/films/${id}`)
      .then((response) => {
        const movie = adaptMovieToClient(response.data);
        dispatch(ActionCreater.loadOneMovie(movie));
      });
  },
  loadSimilarMovies: (id) => (dispatch, getState, api) => {
    return api.get(`/films/${id}/similar`)
      .then((response) => {
        // TODO: Добавить обработку загрузки похожих фильмов
      });
  },
  loadFavoriteMovies: () => (dispatch, getState, api) =>{
    return api.get(`/favorite`)
      .then((response) => {
        // TODO: Добавить обработку загрузки списка пользователя
      });
  },
  addToFavorite: (id, status) => (dispatch, getState, api) => {
    status = status ? 1 : 0;

    return api.post(`/favorite/${id}/${status}`)
      .then((response) => {
        // TODO: Добавить обработку добавления фильма в фавориты
      });
  },
  loadComments: (filmId)=> (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        // TODO: Добавить обработку загруженых коментов
      });
  },
  sendNewComment: (filmId, newComment) =>(dispatch, getState, api) => {
    return api.post(`/comments/${filmId}`, {
      rating: newComment.rating,
      comment: newComment.comment
    })
    .then((response) => {
      //
    });
  }
};


const reducer = (state = initialState, action) => {
  // TODO: Добавить обработку Action : LOAD_ONE_MOVIE
  switch (action.type) {
    case ActionType.SET_GENRE_FILTER:
      return extendObject(state, {currentGenreFilter: action.payload});
    case ActionType.LOAD_MOVIES:
      return extendObject(state, {movies: action.payload});
  }

  return state;
};


export {reducer, ActionCreater, Operation, ActionType};
