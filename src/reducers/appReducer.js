import { ON_APP_INIT, CHANGE_HERO } from '../actions';
import { JokeAPI } from '../api/JokeAPI';

const initialState = {
  hero: JokeAPI.hero,
  appInitialized: false
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ON_APP_INIT:
      return {
        ...state,
        appInitialized: true
      };
    case CHANGE_HERO:
      return {
        ...state,
        hero: action.hero
      };
    default:
      return state;
  }
}

export default appReducer;