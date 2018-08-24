import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import redPanda from './Images/maxresdefault.jpg'
import hobbies from './Data/hobbies.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={redPanda} />
       {/* <img src={hobbies.pandas.photos[0].imageURL}/> */}
      </div>
    );
  }
}

export default App;
