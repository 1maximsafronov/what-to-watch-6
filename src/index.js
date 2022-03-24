import React from "react";
import ReactDom from "react-dom";
import {reducer} from "./store/reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.querySelector(`#root`)
);
