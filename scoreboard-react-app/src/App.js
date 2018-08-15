import React, { Component } from 'react';
import './App.css';

import TeamScoreBoard from './TeamScoreBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Cool Scoreboard</h1>
        </header>
        <section>
          <TeamScoreBoard />
          <TeamScoreBoard />
        </section>
      </div>
    );
  }
}

export default App;
