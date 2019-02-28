import { ON_APP_INIT } from '../actions';

const initialState = {
  appInitialized: false
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ON_APP_INIT:
      return { ...state, appInitialized: true };
    default:
      return state;
  }
}

export default appReducer;