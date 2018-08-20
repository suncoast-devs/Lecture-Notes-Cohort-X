import React, { Component } from 'react';
import './App.css';
import Minesweeper from './Minesweeper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Minesweeper/>  
      </div>
    );
  }
}

export default App;
