import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddForm from './Components/AddForm';
import ListDisplay from './Components/ListDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bagOWords: [],
    }
  }


  addItemToBagOWords = (newItem) => {
      // add item to the list in state
      this.setState({
        bagOWords: this.state
          .bagOWords
          .concat(newItem),
      })
   
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
        <AddForm addItemToList={this.addItemToBagOWords}/>
        <ListDisplay wordList={this.state.bagOWords}/>
        <section>
          <button onClick={this.selectRandomItem}>Select Random</button>
          <h1>The selected value is {this.state.selectedWord}</h1>
        </section>
      </div>
    );
  }
}

export default App;
