import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import MoviePlayerPage from "../movie-player-page/movie-player-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/mylist">
          <MyListPage />
        </Route>
        <Route exact path="/films/:id">
          <MoviePage />
        </Route>
        <Route exact path="/add-review">
          <AddReviewPage />
        </Route>
        <Route exact path="/player">
          <MoviePlayerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
