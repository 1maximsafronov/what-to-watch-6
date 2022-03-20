import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

it(`Render MovieCard`, () =>{
  const tree = renderer.create(
      <MovieCard />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
