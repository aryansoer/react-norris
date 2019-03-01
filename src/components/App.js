import React, { Component } from 'react';

import './App.css';

import JokeCard from './joke-card/JokeCard';
import Spinner from './spinner/Spinner';

class App extends Component {
  componentDidMount() {
    this.props.initApp();
    this.props.fetchRandomJoke();
  }

  render() {
    const { randomJoke = '', isLoading } = this.props.joke;

    return (
      <div className="App">
        <JokeCard joke={randomJoke}>
          <Spinner show={isLoading}/>
        </JokeCard>
      </div>
    );
  }
}

export default App;
