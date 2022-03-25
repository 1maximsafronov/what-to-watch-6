const ActionType = {
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_ONE_MOVIE: `data/loadOneMovie`,
  CHANGE_FILTER: `data/changeFilter`,
  LOAD_PROMO_MOVIE: `data/loadPromoMovie`,
  LOAD_SIMILAR_MOVIES: `data/loadSimilarMovies`,
  RESET_SIMILAR_MOVIES: `data/resetSimilarMovies`
};


const ActionCreator = {
  loadMovies(movies) {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies
    };
  },
  changeFilter(filterType) {
    return {
      type: ActionType.CHANGE_FILTER,
      payload: filterType
    };
  },
  loadOneMovie(movie) {
    return {
      type: ActionType.LOAD_ONE_MOVIE,
      payload: movie
    };
  },
  loadPromoMovie(promoMove) {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMove
    };
  },
  loadSimilarMovies(similarMovies) {
    return {
      type: ActionType.LOAD_SIMILAR_MOVIES,
      payload: similarMovies,
    };
  },
  resetSimilarMovies() {
    return {
      type: ActionType.RESET_SIMILAR_MOVIES,
      payload: null
    };
  }
};


export {ActionType, ActionCreator};
