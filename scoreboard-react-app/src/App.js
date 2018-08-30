import React, { Component } from 'react';
import './App.css';

import TeamScoreBoard from './TeamScoreBoard'

class App extends Component {

  resetScore = () => {
    localStorage.setItem("Home-team-score", 0)
    
    localStorage.removeItem("Away-team-score")
    // localStorage.clear()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Cool Scoreboard</h1>
        </header>
        <section className="boards">
          <TeamScoreBoard teamName={"Home"} />
          <TeamScoreBoard teamName={"Away"} />
        </section>
        <footer>
          <button onClick={this.resetScore}>Reset Score</button>
        </footer>
      </div>
    );
  }
}

export default App;
