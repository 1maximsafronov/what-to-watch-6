import React from "react";
import ReactDom from "react-dom";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {createAPI} from "./service/api";
import rootReducer from "./store/root-reducer";
import {redirect} from "./store/middlewares/redirect";
import {requireAuthorization} from "./store/actions";
import {fetchMovies, fetchPromoMovie, checkAuth} from "./store/api-actions";

import {AuthorizationStatus} from "./const";

import App from "./components/app/app.jsx";

const api = createAPI(() => {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());
store.dispatch(fetchMovies());
store.dispatch(fetchPromoMovie());

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.querySelector(`#root`)
);
