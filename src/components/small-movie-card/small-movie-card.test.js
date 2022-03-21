import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const mockMovie = {
  name: `movie name`,
  previewImage: `movie image`,
};

it(`Карточка фильма в каталоге отрисовывается верно`, () =>{
  const tree = renderer.create(
      <SmallMovieCard
        movie={mockMovie}
        onHover={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
