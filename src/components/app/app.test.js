import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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


it(`Render App`, () =>{
  const tree = renderer.create(
      <App movies={mockMovies}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
