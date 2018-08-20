import React, { Component } from 'react';
import './App.css';
import Minesweeper from './Minesweeper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Minesweeper/>  
        {/* <h1 className="hide-winner">You won!</h1>
        <h1 className="hide-loser">You lost!</h1> */}
      </div>
    );
  }
}

export default App;
