const ActionType = {
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_ONE_MOVIE: `data/loadOneMovie`,
  CHANGE_FILTER: `data/changeFilter`,
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
  }
};


export {ActionType, ActionCreator};
