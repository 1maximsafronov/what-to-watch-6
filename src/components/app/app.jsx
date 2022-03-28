import {Router, Switch, Route} from "react-router-dom";
import React from "react";

import browserHistory from "browser-history.js";

import MainPage from "../pages/main-page/main-page";
import LoginPage from "../pages/login-page/login-page";
import MoviePage from "../pages/movie-page/movie-page";
import MyListPage from "../pages/my-list-page/my-list-page";
import PageNotFound from "../pages/not-found-page/not-found-page";
import AddReviewPage from "../pages/add-review-page/add-review-page";
import MoviePlayerPage from "../pages/movie-player-page/movie-player-page";
import PrivateRoute from "components/blocks/private-route/private-route";

import {AppRoute} from "const.js";

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage}/>
        <Route exact path={AppRoute.LOGIN} component={LoginPage} />
        <PrivateRoute exact path={AppRoute.MYLIST}
          render={()=><MyListPage/>} />
        <Route exact path={AppRoute.FILMS} component={MoviePage}/>
        <PrivateRoute exact path={AppRoute.ADD_REVIEW}
          render={()=><AddReviewPage />}/>
        <Route exact path={AppRoute.PLAYER} component={MoviePlayerPage}/>
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  );
};

export default App;
