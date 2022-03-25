import {ActionType} from "./actions";

const initialState = {
  movies: [],
  promoMovie: {},
  currentGenreFilter: ``,
  isMoviesLoaded: false,
  isPromoLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isMoviesLoaded: true,
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
        promoMovie: action.payload,
        isPromoLoaded: true,
      };
  }

  return state;
};

export {reducer};
