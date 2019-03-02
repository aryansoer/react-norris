import { connect } from 'react-redux';

import App from "../components/App";
import {
  fetchRandomJoke,
  changeAppHero,
  openModal,
  closeModal
} from "../actions";

const mapStateToProps = (state) => ({
  app: state.app,
  joke: state.joke,
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomJoke: () => dispatch(fetchRandomJoke()),
    changeAppHero: (hero) => dispatch(changeAppHero(hero)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;