import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddForm from './Components/AddForm';
import ListDisplay from './Components/ListDisplay';
import RandomSelectionDisplay from './Components/RandomSelectionDisplay';

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
        <section className="body">
          <aside className="left">
            <AddForm addItemToList={this.addItemToBagOWords} />
            <button onClick={this.selectRandomItem}>Select Random</button>
            <RandomSelectionDisplay selectedWord={this.state.selectedWord} />
          </aside>
          <section className="right">
            <h3>Currently in Bag!</h3>
            <ListDisplay wordList={this.state.bagOWords} />
          </section>
        </section>

      </div>
    );
  }
}

export default App;
