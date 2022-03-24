import React, {useState} from "react";

import MovieNav from "../movie-nav/movie-nav";
import MovieOverView from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import {MovieTab} from "../../const.js";

const MovieDesc = () => {
  const [activeTab, setActiveTab] = useState(MovieTab.OVERVIEW);
  return (
    <div className="movie-card__desc">
      <MovieNav
        items={Object.values(MovieTab)}
        activeItem={activeTab}
        onItemChange={(tab)=> setActiveTab(tab)}
      />

      {MovieTab.OVERVIEW === activeTab && <MovieOverView />}
      {MovieTab.DETAILS === activeTab && <MovieDetails />}
      {MovieTab.REVIEWS === activeTab && <MovieReviews />}
    </div>
  );
};


export default MovieDesc;
