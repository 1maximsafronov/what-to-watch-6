import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PageContent from "../page-content/page-content.jsx";

const moviesList = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`
];

const App = () => {
  return (
    <React.Fragment>
      <MovieCard />
      <PageContent
        movies={moviesList}
      />
    </React.Fragment>
  );
};

export default App;
