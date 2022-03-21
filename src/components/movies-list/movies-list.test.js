import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list";


const mockMovies = [
  {
    name: `first movie name`,
    previewImage: `first movie image`,
  },
  {
    name: `second movie name`,
    previewImage: `second movie image`,
  }
];

it(`список фильмов MoviesList отрисовывается верно`, () =>{
  const tree = renderer.create(
      <MoviesList
        movies={mockMovies}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
