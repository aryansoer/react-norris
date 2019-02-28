import { combineReducers } from 'redux';

import appReducer from './appReducer';
import jokeReducer from './jokeReducer';

const rootReducer = combineReducers({
  app: appReducer,
  joke: jokeReducer
});

export default rootReducer;