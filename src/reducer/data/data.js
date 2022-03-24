import {adaptMovieToClient} from "../../utils/movies.js";
import {extendObject} from "../../utils/common.js";


const initialState = {
  movies: [],
  currentGenreFilter: ``
};

const ActionType = {
  SET_GENRE_FILTER: `SET_GENRE_FILTER`,
  LOAD_MOVIES: `LOAD_MOVIES`,
};

const ActionCreater = {
  setFilterType(filterType) {
    return {
      type: ActionType.SET_GENRE_FILTER,
      payload: filterType
    };
  },
  loadMovies(data) {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: data
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
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE_FILTER:
      return extendObject(state, {currentGenreFilter: action.payload});
    case ActionType.LOAD_MOVIES:
      return extendObject(state, {movies: action.payload});
  }

  return state;
};


export {reducer, ActionCreater, Operation, ActionType};
