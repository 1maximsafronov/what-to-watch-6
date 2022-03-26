import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/root-reducer";
import {createAPI} from "./service/api";
import {composeWithDevTools} from "redux-devtools-extension";

import App from "./components/app/app.jsx";
import {AuthorizationStatus} from "./const";
import {requireAuthorization} from "./store/actions";
import {fetchMovies, fetchPromoMovie, checkAuth} from "./store/api-actions";

const api = createAPI(() => {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
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
