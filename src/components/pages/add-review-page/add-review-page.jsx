import React from "react";

import Poster from "../../blocks/movie-card/poster/poster";
import BgImage from "../../blocks/movie-card/bg-image/bg-image";
import PageHeader from "../../blocks/page-header/page-header";
import Breadcrumbs from "../../blocks/breadcrumbs/breadcrumbs";
import AddReviewForm from "../../blocks/add-review-form/add-review-form";

const AddReviewPage = () => {
  const backgroundImage = `img/bg-the-grand-budapest-hotel.jpg`;
  const poster = `img/the-grand-budapest-hotel-poster.jpg`;
  const name = `The Grand Budapest Hotel`;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <BgImage src={backgroundImage} alt={name}/>

        <h1 className="visually-hidden">WTW</h1>
        <PageHeader>
          <Breadcrumbs />
        </PageHeader>

        <Poster src={poster} alt={name} size="small"/>
      </div>

      <AddReviewForm />

    </section>
  );
};

export default AddReviewPage;
