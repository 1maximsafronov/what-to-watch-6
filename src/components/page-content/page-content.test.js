import React from "react";
import renderer from "react-test-renderer";
import PageContent from "./page-content.jsx";

const moviesList = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`
];


it(`Render PageContent`, () =>{
  const tree = renderer.create(
      <PageContent movies={moviesList}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
