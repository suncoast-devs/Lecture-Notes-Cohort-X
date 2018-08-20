import React, { Component } from 'react';
import './App.css';
import Minesweeper from './Minesweeper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message:"Start sweepin'!"
    }
  }
  
  displayGameResult = (state) => {
    if (state === "lost") {
        //display lost message
        this.setState({
            message: "Womp, you lost"
        })
    } else if (state === "won") {
        this.setState({
            message: "Booyah, you won!"
        })
    } else {
        this.setState({
            message: "still sweepin'..."
        })
    }
}

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <Minesweeper updateMessage={this.displayGameResult}/>  
      </div>
    );
  }
}

export default App;
