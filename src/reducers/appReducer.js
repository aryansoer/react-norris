import { CHANGE_APP_HERO } from '../actions';
import { JokeAPI } from '../api/JokeAPI';

const defaultHero = JokeAPI.hero;

const initialState = {
  hero: defaultHero
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_APP_HERO:
      return { ...state, hero: action.hero || defaultHero };

    default:
      return state;
  }
}

export default appReducer;