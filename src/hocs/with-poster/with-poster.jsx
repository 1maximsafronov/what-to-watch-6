import React from "react";
import Poster from "../../components/movie-card-poster/movie-card-poster";

const withPoster = (Component) => {
  const WithPoster = (props) => {
    return (
      <Component
        {...props}
        renderPoster={(src, alt, size) => (
          <Poster src={src} alt={alt} size={size}/>
        )}
      />
    );
  };


  return WithPoster;
};


export default withPoster;
