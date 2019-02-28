import { JokeAPI } from '../api/JokeAPI';

export const FETCH_RANDOM_JOKE = 'FETCH_RANDOM_JOKE';
export const FETCH_RANDOM_JOKE_SUCCESS = 'FETCH_RANDOM_JOKE_SUCCESS';
export const FETCH_RANDOM_JOKE_FAILURE = 'FETCH_RANDOM_JOKE_FAILURE';

export function fetchRandomJoke() {
  return async (dispatch) => {
    dispatch({ type: FETCH_RANDOM_JOKE });

    try {
      const randomJoke = await JokeAPI.fetchRandomJoke();

      dispatch({
        type: FETCH_RANDOM_JOKE_SUCCESS,
        randomJoke
      });
    } catch ({ message }) {
      dispatch({
        type: FETCH_RANDOM_JOKE_FAILURE,
        error: message
      });
    }
  };
}