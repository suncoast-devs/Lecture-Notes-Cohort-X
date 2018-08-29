import React, { Component } from 'react';
import logo from '../logo.svg';
import AddForm from './AddForm';
import ListDisplay from './ListDisplay';
import RandomSelectionDisplay from './RandomSelectionDisplay';



class GrabBag extends Component {
  constructor(props) {
    super(props);

    let fromStorage = localStorage.getItem("bag-O-Words")
    console.log(fromStorage);
    console.log(typeof fromStorage);

    fromStorage = fromStorage ? fromStorage.split(',') : []

    this.state = {
      bagOWords: fromStorage,
      selectedWord:''
    }
  }

  addItemToBagOWords = (newItem) => {
    const bag = this.state.bagOWords.concat(newItem)
    // add/update to local storage
    localStorage.setItem("bag-O-Words", bag)
    // add item to the list in state
    this.setState({
      bagOWords: bag
    })

  }

  selectRandomItem = () => {
    console.log("select random was clicked")
    // gen rand number , between 0 - array.length
    const rand = Math.floor(Math.random() * this.state.bagOWords.length)
    // display the selection
    let selected = this.state.bagOWords[rand]
    // if (this.state.bagOWords.includes("gus")){
    //   selected = "gus"
    // }
    this.setState({
      selectedWord: selected
    })
  }

  emptyBagEvent = () => {
    // big red button
    //localStorage.clear()

    // targeted remove
    localStorage.removeItem("bag-O-Words")
    this.setState({
      bagOWords: [],
      selectedWord: ''
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
            <button onClick={this.emptyBagEvent}>Empty Bag</button>
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

export default GrabBag;
