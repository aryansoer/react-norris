import React, { Component } from 'react';

import './App.css';

import JokeCard from './joke-card/JokeCard';

class App extends Component {
  componentDidMount() {
    this.props.initApp();
    this.props.fetchRandomJoke();
  }

  render() {
    const text = this.props.joke.randomJoke || 'Welcome To React Norris';

    return (
      <div className="App">
        <JokeCard joke={text}/>
      </div>
    );
  }
}

export default App;
