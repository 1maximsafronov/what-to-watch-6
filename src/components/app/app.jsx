import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import MovieDetailsPage from "../movie-details-page/movie-details-page.jsx";

const App = (props) => {
  const {movies} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <MainPage movies={movies}/>
        }/>
        <Route exact path="/miveu" element={
          <MovieDetailsPage />
        }/>
      </Routes>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default App;
