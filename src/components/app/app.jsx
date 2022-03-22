import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import MovieDetailsPage from "../movie-details-page/movie-details-page.jsx";

const AppRoutes = {
  MAIN: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films`,
  REVIEW: `/film/review`,
  PLAYER: `/player`
};

class App extends PureComponent {
  render() {
    const {movies} = this.props;

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path={AppRoutes.MAIN} element={
            <MainPage movies={movies}/>
          }/>
          <Route exact path={AppRoutes.LOGIN} element={
            <h1>Страница авторизации</h1>
          }/>
          <Route exact path={AppRoutes.MY_LIST} element={
            <h1>Мой список фильмов</h1>
          }/>
          <Route exact path={AppRoutes.FILM} element={
            <MovieDetailsPage />
          }/>
          <Route exact path={AppRoutes.REVIEW} element={
            <h1>Страница с отзывом</h1>
          }/>
          <Route exact path={AppRoutes.PLAYER} element={
            <h1>Страница плеера</h1>
          }/>
        </Routes>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default App;
