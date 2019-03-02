import React, { Component } from 'react';

import './App.css';

import JokeCard from './joke-card/JokeCard';
import Spinner from './spinner/Spinner';
import Modal from './modal/Modal';
import cog from '../assets/icons/cog.svg';

class App extends Component {

  constructor(props) {
    super(props);

    this.heroInput = React.createRef();

    this.handleClick = this.handleClick.bind(this);
    this.handleSettingClick = this.handleSettingClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.initApp();
    this.props.fetchRandomJoke();
  }

  handleClick(e) {
    if (!this.props.joke.isLoading) {
      this.props.fetchRandomJoke();
    }
  }

  handleSettingClick(e) {
    e.stopPropagation();
    this.props.openModal();
  }

  handleChange(e) {
    const { value } = this.heroInput.current;

    if (value) {
      this.props.changeHero(value);
      this.props.closeModal();
      this.heroInput.current.style.borderColor = '#dddddd';
    } else {
      this.heroInput.current.style.borderColor = '#f44336';
    }
  }

  handleModalClose() {
    this.props.closeModal();
  }

  render() {
    const { modalIsOpen, hero } = this.props.app;
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

        <Modal open={modalIsOpen} title={'Joke Hero'} handleClose={this.handleModalClose}>
            <div className="App-hero-form">
              <input type="text" className="App-hero-input" defaultValue={hero} ref={this.heroInput}/>
              <button className="App-button App-hero-button" onClick={this.handleChange}>Save</button>
            </div>
        </Modal>
      </main>
    );
  }
}

export default App;
