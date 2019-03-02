import React, { Component } from 'react';

import './App.css';

import JokeCard from './joke-card/JokeCard';
import Spinner from './spinner/Spinner';
import cog from '../assets/icons/cog.svg';
class App extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleSettingClick = this.handleSettingClick.bind(this);
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
    // TODO: Open modal
  }

  render() {
    const { randomJoke, isLoading } = this.props.joke;

    return (
      <div className="App" onClick={this.handleClick}>
        <JokeCard text={randomJoke || ''}>
          <Spinner show={isLoading}/>
        </JokeCard>

        <div className="App-setting-bar">
          <button className="App-button" onClick={this.handleSettingClick}>
            <img src={cog} className="App-button-icon" alt="cog"/>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
