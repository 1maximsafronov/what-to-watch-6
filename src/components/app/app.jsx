import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PageContent from "../page-content/page-content.jsx";
import PropTypes from "prop-types";


const App = (props) => {
  const {movies} = props;

  return (
    <React.Fragment>
      <MovieCard />
      <PageContent
        movies={movies}
      />
    </React.Fragment>
  );
};

App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default App;
