import {createSelector} from "reselect";
import NameSpase from "../name-space";


export const getMovies = (state) => {
  return state[NameSpase.DATA].movies;
};
