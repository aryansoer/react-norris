import {
  FETCH_RANDOM_JOKE,
  FETCH_RANDOM_JOKE_SUCCESS,
  FETCH_RANDOM_JOKE_FAILURE
} from '../actions';

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
      }

    default:
      return state;
  }
}

export default jokeReducer;