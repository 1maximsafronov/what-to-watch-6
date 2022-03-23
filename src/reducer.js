import movies from "./mocks/films.js";
import {extendObject} from "./utils/common.js";

const mockMovies = [
  ...movies,
  ...movies.sort(() => Math.random() - 0.5),
  ...movies.sort(() => Math.random() - 0.5)
];

const initialState = {
  movies: mockMovies,
  currentGenreFilter: ``
};

const ActionType = {
  SET_GENRE_FILTER: `SET_GENRE_FILTER`
};

const ActionCreater = {
  setFilterType(filterType) {
    return {
      type: ActionType.SET_GENRE_FILTER,
      payload: filterType
    };
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE_FILTER:
      return extendObject(state, {currentGenreFilter: action.payload});
  }

  return state;
};


export {reducer, ActionCreater, ActionType};
