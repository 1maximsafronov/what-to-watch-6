import {ActionType} from "./actions";
import movies from "../mocks/films";

const initialState = {
  movies,
  promoMovie: null,
  currentGenreFilter: ``,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case ActionType.LOAD_ONE_MOVIE:
      return state;
    case ActionType.CHANGE_FILTER:
      return {
        ...state,
        currentGenreFilter: action.payload
      };
    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        promoMovie: action.payload
      };
  }

  return state;
};

export {reducer};
