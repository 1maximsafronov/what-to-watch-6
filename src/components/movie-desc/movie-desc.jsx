import React, {useState} from "react";
import PropTypes from "prop-types";

import MovieNav from "../movie-nav/movie-nav";
import MovieOverView from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import {MovieTab} from "../../const.js";

const MovieDesc = (props) => {
  const [activeTab, setActiveTab] = useState(MovieTab.OVERVIEW);
  const {movie, comments} = props;

  return (
    <div className="movie-card__desc">
      <MovieNav
        items={Object.values(MovieTab)}
        activeItem={activeTab}
        onItemChange={(tab)=> setActiveTab(tab)}
      />

      {MovieTab.OVERVIEW === activeTab && <MovieOverView movie={movie}/>}
      {MovieTab.DETAILS === activeTab && <MovieDetails movie={movie} />}
      {MovieTab.REVIEWS === activeTab && <MovieReviews movie={movie} comments={comments} />}
    </div>
  );
};

MovieDesc.propTypes = {
  movie: PropTypes.object,
  comments: PropTypes.array,
};


export default MovieDesc;
