import React, { Component } from 'react';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.initApp();
    this.props.fetchRandomJoke();
  }

  render() {
    const text = this.props.joke.randomJoke || 'Welcome To React Norris';

    return (
      <div className="App">
        <h1>{text}</h1>
      </div>
    );
  }
}

export default App;
