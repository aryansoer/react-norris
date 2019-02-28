import { connect } from 'react-redux';

import App from "../App";
import { initApp } from "../actions";

const mapStateToProps = state => {
  const { app } = state;

  return {
    app
  };
}

const mapDispatchToProps = dispatch => {
  return {
    initApp: () => dispatch(initApp())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;