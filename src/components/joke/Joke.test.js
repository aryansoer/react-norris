import React from 'react';
import renderer from 'react-test-renderer';
import Joke from './Joke';

it('render correctly joke component', () => {
  const JokeComponent = renderer.create(<Joke text={'Joke'} />).toJSON();
  expect(JokeComponent).toMatchSnapshot();
});