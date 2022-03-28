import React, {useState} from "react";
import PropTypes from "prop-types";

import {MovieTab} from "const.js";

import MovieNav from "../../movie-nav/movie-nav";
import OverviewSection from "../overview-section/overview-section";
import DetailsSection from "../details-section/details-section";
import ReviewsSection from "../reviews-section/reviews-section";


const MovieDesc = (props) => {
  const [activeTab, setActiveTab] = useState(MovieTab.OVERVIEW);
  const {movie, comments} = props;
  const navItems = Object.values(MovieTab);


  const renderContent = () => {
    switch (activeTab) {
      case MovieTab.OVERVIEW:
        return <OverviewSection movie={movie}/>;
      case MovieTab.DETAILS:
        return <DetailsSection movie={movie} />;
      case MovieTab.REVIEWS:
        return <ReviewsSection movie={movie} comments={comments} />;
    }

    return null;
  };

  return (
    <div className="movie-card__desc">
      <MovieNav className="movie-card__nav"
        items={navItems}
        activeItem={activeTab}
        onItemChange={(tab)=> setActiveTab(tab)}
      />
      {renderContent()}
    </div>
  );
};

MovieDesc.propTypes = {
  movie: PropTypes.object,
  comments: PropTypes.array,
};


export default MovieDesc;
