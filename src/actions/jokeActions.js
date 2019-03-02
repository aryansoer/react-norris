import { JokeAPI } from '../api/JokeAPI';
import { replace } from '../lib/utils';

export const FETCH_RANDOM_JOKE = 'FETCH_RANDOM_JOKE';
export const FETCH_RANDOM_JOKE_SUCCESS = 'FETCH_RANDOM_JOKE_SUCCESS';
export const FETCH_RANDOM_JOKE_FAILURE = 'FETCH_RANDOM_JOKE_FAILURE';
export const CHANGE_RANDOM_JOKE_HERO = 'CHANGE_RANDOM_JOKE_HERO';

export function fetchRandomJoke() {
  return async (dispatch, getState) => {
    const { app } = getState();

    dispatch({ type: FETCH_RANDOM_JOKE });

    try {
      const randomJoke = await JokeAPI.fetchRandomJoke();

      dispatch({
        type: FETCH_RANDOM_JOKE_SUCCESS,
        randomJoke: replace(randomJoke, JokeAPI.hero, app.hero)
      });
    } catch ({ message }) {
      dispatch({
        type: FETCH_RANDOM_JOKE_FAILURE,
        error: message
      });
    }
  };
}

export function changeRandomJokeHero(oldHero, newHero) {
  return { type: CHANGE_RANDOM_JOKE_HERO, oldHero, newHero };
}