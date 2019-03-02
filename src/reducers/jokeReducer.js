import {
  FETCH_RANDOM_JOKE,
  FETCH_RANDOM_JOKE_SUCCESS,
  FETCH_RANDOM_JOKE_FAILURE,
  CHANGE_RANDOM_JOKE_HERO
} from '../actions';
import { replace } from '../lib/utils';

const initialState = {
  randomJoke: null,
  isLoading: false,
  error: {}
};

function jokeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RANDOM_JOKE:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_RANDOM_JOKE_SUCCESS:
      return {
        ...state,
        randomJoke: action.randomJoke,
        isLoading: false
      };

    case FETCH_RANDOM_JOKE_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case CHANGE_RANDOM_JOKE_HERO:
      return {
        ...state,
        randomJoke: replace(state.randomJoke, action.oldHero, action.newHero)
      };

    default:
      return state;
  }
}

export default jokeReducer;