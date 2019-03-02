import { ON_APP_INIT, CHANGE_HERO, OPEN_MODAL, CLOSE_MODAL } from '../actions';
import { JokeAPI } from '../api/JokeAPI';

const initialState = {
  hero: JokeAPI.hero,
  appInitialized: false,
  modalIsOpen: false
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

    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false
      };

    default:
      return state;
  }
}

export default appReducer;