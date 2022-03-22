import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import LoginPage from "../login-page/login-page.jsx";
import MovieDetailsPage from "../movie-details-page/movie-details-page.jsx";
import ReviewPage from "../review-page/review-page.jsx";
import Player from "../player/player.jsx";
import MyList from "../my-list/my-list.jsx";

const AppRoutes = {
  MAIN: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films`,
  REVIEW: `/review`,
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
            <LoginPage />
          }/>
          <Route exact path={AppRoutes.MY_LIST} element={
            <MyList />
          }/>
          <Route exact path={AppRoutes.FILM} element={
            <MovieDetailsPage />
          }/>
          <Route exact path={AppRoutes.REVIEW} element={
            <ReviewPage />
          }/>
          <Route exact path={AppRoutes.PLAYER} element={
            <Player />
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
