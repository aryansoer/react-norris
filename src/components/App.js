import React, { Component } from 'react';

import './App.css';

import JokeCard from './joke-card/JokeCard';
import Spinner from './spinner/Spinner';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
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

  render() {
    const { randomJoke, isLoading } = this.props.joke;

    return (
      <div className="App" onClick={this.handleClick}>
        <JokeCard text={randomJoke || ''}>
          <Spinner show={isLoading}/>
        </JokeCard>
      </div>
    );
  }
}

export default App;
