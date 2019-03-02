import React, { Component } from 'react';

import './App.css';

import JokeCard from './joke-card/JokeCard';
import Spinner from './spinner/Spinner';
import Modal from './modal/Modal';
import cog from '../assets/icons/cog.svg';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleSettingClick = this.handleSettingClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  componentDidMount() {
    this.props.initApp();
    this.props.fetchRandomJoke();
  }

  handleClick(e) {
    if (!this.props.joke.isLoading) {
      this.props.changeHero('Jean-Claude Van Damme');
      this.props.fetchRandomJoke();
    }
  }

  handleSettingClick(e) {
    e.stopPropagation();
    this.props.openModal();
  }

  handleModalClose() {
    this.props.closeModal();
  }

  render() {
    const { modalIsOpen } = this.props.app;
    const { randomJoke, isLoading } = this.props.joke;

    return (
      <main className="App" onClick={this.handleClick}>
        <JokeCard text={randomJoke || ''}>
          <Spinner show={isLoading}/>
        </JokeCard>

        <aside className="App-setting-bar">
          <button className="App-button" onClick={this.handleSettingClick}>
            <img src={cog} className="App-button-icon" alt="cog"/>
          </button>
        </aside>

        <Modal open={modalIsOpen} handleClose={this.handleModalClose}>
          Modal Content
        </Modal>
      </main>
    );
  }
}

export default App;
