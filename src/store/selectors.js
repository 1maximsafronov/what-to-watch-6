import {createSelector} from "reselect";
// import {NameSpace} from "./root-reducer";
import {getMovies} from "./app-data/selector";
import {getCurrentGenre} from "./app-process/selector";
import {allGenresItem} from "../const";

export const getMoviesByGenre = createSelector(
    getMovies,
    getCurrentGenre,
    (movies, currentGenre) => {
      if (currentGenre === allGenresItem) {
        return movies;
      }

      return movies.slice().filter((movie) => movie.genre === currentGenre);
    }
);
