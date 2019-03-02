import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';

import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import configureStore from './store'
import { loadState, saveState } from './localStorage';
import { throttle } from './lib/utils';

const preloadedState = loadState();
const store = configureStore(preloadedState);

// Write to the localStorage at most once a second
store.subscribe(throttle(() => {
  saveState({
    app: store.getState().app
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
