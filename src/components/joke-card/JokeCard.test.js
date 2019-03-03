import React from 'react';
import renderer from 'react-test-renderer';
import JokeCard from './JokeCard';

it('render correctly joke-card component', () => {
  const JokeCardComponent = renderer.create(<JokeCard text={'Joke'} />).toJSON();
  expect(JokeCardComponent).toMatchSnapshot();
});