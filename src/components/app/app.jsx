import {Router as BrowserRouter, Switch, Route, Link} from "react-router-dom";
import React from "react";

import browserHistory from "../../browser-history";

import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MoviePage from "../movie-page/movie-page";
import MyListPage from "../my-list-page/my-list-page";
import AddReviewPage from "../add-review-page/add-review-page";
import MoviePlayerPage from "../movie-player-page/movie-player-page";

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
