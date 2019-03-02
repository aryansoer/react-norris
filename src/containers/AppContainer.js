import { connect } from 'react-redux';

import App from "../components/App";
import {
  initApp,
  fetchRandomJoke,
  changeHero,
  openModal,
  closeModal
} from "../actions";

const mapStateToProps = (state) => ({
  app: state.app,
  joke: state.joke
});

const mapDispatchToProps = (dispatch) => {
  return {
    initApp: () => dispatch(initApp()),
    fetchRandomJoke: () => dispatch(fetchRandomJoke()),
    changeHero: (hero) => dispatch(changeHero(hero)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;