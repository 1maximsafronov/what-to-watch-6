import {NameSpace} from "../root-reducer";

export const getMovies = (state) => state[NameSpace.DATA].movies;
export const getPromoMovie = (state) => state[NameSpace.DATA].promoMovie;
export const getMoviesLoadedStatus = (state) => state[NameSpace.DATA].isMoviesLoaded;
export const getPromoLoadedStatus = (state) => state[NameSpace.DATA].isPromoLoaded;

/*

(state) => state[NameSpace.DATA].movies;

*/
