import { combineReducers } from 'redux';

import appReducer from './appReducer';
import jokeReducer from './jokeReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  app: appReducer,
  joke: jokeReducer,
  modal: modalReducer
});

export default rootReducer;