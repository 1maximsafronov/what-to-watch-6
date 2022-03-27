import {Router as BrowserRouter, Switch, Route, Link} from "react-router-dom";
import React from "react";

import browserHistory from "browser-history.js";

import MainPage from "../pages/main-page/main-page";
import LoginPage from "../pages/login-page/login-page";
import MoviePage from "../pages/movie-page/movie-page";
import MyListPage from "../pages/my-list-page/my-list-page";
import AddReviewPage from "../pages/add-review-page/add-review-page";
import MoviePlayerPage from "../pages/movie-player-page/movie-player-page";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/films/:id" component={MoviePage}/>
        <Route exact path="/add-review" component={AddReviewPage}/>
        <Route exact path="/player/:id" component={MoviePlayerPage}/>
        <Route exact path="/mylist" component={MyListPage} />
        <Route render={() => (
          <div>
            <h1>404 страница не найдена</h1>
            <Link to="/">На главну</Link>
          </div>
        )}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
