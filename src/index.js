import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import movies from "./mocks/films.js";

const root = document.querySelector(`#root`);

ReactDom.render(
    <App movies={movies}/>,
    root
);
