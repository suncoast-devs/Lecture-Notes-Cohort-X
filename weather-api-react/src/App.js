import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CurrentWeather from './CurrentWeather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrentWeather/>
      </div>
    );
  }
}

export default App;
