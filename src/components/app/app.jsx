import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import MovieDetailsPage from "../movie-details-page/movie-details-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {movies} = this.props;

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <MainPage movies={movies}/>
          }/>
          <Route exact path="/movie" element={
            <MovieDetailsPage />
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
