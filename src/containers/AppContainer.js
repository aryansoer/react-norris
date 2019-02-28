import { connect } from 'react-redux';

import App from "../components/App";
import { initApp, fetchRandomJoke } from "../actions";

const mapStateToProps = ({ app, joke }) => {
  return { app, joke };
}

const mapDispatchToProps = (dispatch) => {
  return {
    initApp: () => dispatch(initApp()),
    fetchRandomJoke: () => dispatch(fetchRandomJoke())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;