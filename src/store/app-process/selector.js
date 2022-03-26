import {NameSpace} from "../root-reducer";


export const getMovieById = (state) => state[NameSpace.PROCESS].movieById;
export const getMovieLoadedStatus = (state) => state[NameSpace.PROCESS].isMovieByIdLoaded;
export const getSimilarMovies = (state) => state[NameSpace.PROCESS].similarMovies;
export const getSimilarMoviesLoadedStatus = (state) => state[NameSpace.PROCESS].isSimilarMoviesLoaded;
export const getGenresList = (state) => state[NameSpace.PROCESS].genresList;
export const getCurrentGenre = (state) => state[NameSpace.PROCESS].currentGenreFilter;
export const getMovieComments = (state) => state[NameSpace.PROCESS].currentMovieComments;
export const getCommentsLoadedStatus = (state) => state[NameSpace.PROCESS].isCommentsLoaded;

/*

(state) => state[NameSpace.PROCESS].movies;

*/
