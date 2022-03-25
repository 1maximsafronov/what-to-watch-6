import React from "react";

import MovieCardBg from "../movie-card-bg/movie-card-bg";
import Poster from "../movie-card-poster/movie-card-poster";
import AddReviewForm from "../add-review-form/add-review-form";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import PageHeader from "../page-header/page-header";

const AddReviewPage = () => {

  const backgroundImage = `img/bg-the-grand-budapest-hotel.jpg`;
  const poster = `img/the-grand-budapest-hotel-poster.jpg`;
  const name = `The Grand Budapest Hotel`;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <MovieCardBg src={backgroundImage} alt={name}/>

        <h1 className="visually-hidden">WTW</h1>
        <PageHeader>
          <Breadcrumbs />
        </PageHeader>

        <Poster src={poster} alt={name} small/>
      </div>

      <AddReviewForm />

    </section>
  );
};

export default AddReviewPage;
