import React, { Component } from 'react';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To React Norris</h1>
      </div>
    );
  }
}

export default App;
