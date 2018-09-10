import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      width: 5,
      height:4
    }
  }


  updateShape = (event) => {
    const newSize = event.target.value
    console.log('updating size', newSize)
  }

  updateWidth = (event) => {
    const newWidth = event.target.value
    this.setState({
      width: newWidth
    })
  }

  updateHeight = (event) => {
    const newHeight = event.target.value
    this.setState({
      height: newHeight
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section className="App-intro">
          <input
            type="range"
            min="0"
            max="20"
            // onInput={this.updateShape} 
            onChange={this.updateWidth}
            value={this.state.width}
          />
          <input
            type="range"
            min="0"
            max="20"
            // onInput={this.updateShape} 
            onChange={this.updateHeight}
            value={this.state.height}
          />
        </section>

        <div
          className="shape"
          style={
            {
              height: `${this.state.height}em`,
              width: `${this.state.width}em`
            }
          }>
        </div>
      </div>
    );
  }
}

export default App;
