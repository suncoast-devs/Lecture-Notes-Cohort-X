import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bagOWords: [],
      inputValue: ''
    }
  }


  updateInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  addItemEvent = () => {
    console.log("button was clicked")
    console.log("adding to bucket:", this.state.inputValue)
    if (this.state.inputValue){
      // add item to the list in state
      this.setState({
        inputValue: '',
        bagOWords: this.state
          .bagOWords
          .concat(this.state.inputValue),
      })
    }
  }

  selectRandomItem = () => {
    console.log("select random was clicked")
    // gen rand number , between 0 - array.length
    const rand = Math.floor(Math.random() * this.state.bagOWords.length)
    // display the selection

    this.setState({
      selectedWord: this.state.bagOWords[rand]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Grab Bag!</h1>
        </header>
        <section>
          <input
            type="text"
            placeholder="Add item to bag"
            value={this.state.inputValue}
            onChange={this.updateInputValue}
          />
          <button onClick={this.addItemEvent}>Add Item to bag</button>
        </section>
        <section>
          <ul>
            {this.state.bagOWords.map((item, i) => {
              return <li key={i}>{item}</li>
            })}
          </ul>
        </section>
        <section>
          <button onClick={this.selectRandomItem}>Select Random</button>
          <h1>The selected value is {this.state.selectedWord}</h1>
        </section>
      </div>
    );
  }
}

export default App;
