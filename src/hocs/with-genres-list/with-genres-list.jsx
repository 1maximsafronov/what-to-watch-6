import React from "react";
import GenresList from "components/blocks/genres-list/genres-list";

const withGenresList = (Component) => {
  const WithGenresList = (props) => {
    return <Component
      {...props}
      renderGenresList={() => <GenresList />}
    />;
  };

  return WithGenresList;
};

export {withGenresList};
