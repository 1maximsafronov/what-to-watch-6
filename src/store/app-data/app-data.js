import {ActionType} from "../actions";

const initialState = {
  movies: [],
  isMoviesLoaded: false,
  promoMovie: {},
  isPromoLoaded: false,
};


const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isMoviesLoaded: true,
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


export {appData};
