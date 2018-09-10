import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=2b39f89969ae6ac7cc55346160e79f11&language=en-US&page=1")
      .then(resp => {
        if (resp.status === 200){
          return resp.json()
        } else {
          //handle the error somehow
        }
      })
      .then(json => {
        console.log(json)
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
