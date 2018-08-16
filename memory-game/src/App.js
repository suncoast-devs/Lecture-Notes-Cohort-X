import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MemoryGame from './MemoryGame';



const faces = ['🤖', '🐢', '🐼', '🐙', '👾', '👹', '🐢', ' 👾', '😱', '🤖',  '🐲', '🐙', '😱', '👹', '🐼', '🐲']

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pick1:null,
      pick1Pos:null,
      pick2:null,
      pick2Pos:null
    }
  }
  


  compareFaces = (face, posPicked) => {
    console.log(face)
    console.log(face === '🤖')
    const _callback = () => {
      console.log("callback")
      if (this.state.pick2 && this.state.pick1){
        console.log("checkin", this.state)
        if (this.state.pick1 === this.state.pick2){
          console.log("winner")
          
        } else {
          console.log('no match')
        }
        this.setState({
          pick1:null, 
          pick2:null, 
          pick1Pos:null,
          pick2Pos:null
        })
      } else {
        console.log("not checking")
      }
    }
    if (this.state.pick1){
      this.setState({pick2:face, pick1Pos:posPicked}, _callback)
    } else {
      this.setState({pick1:face, pick2Pos: posPicked}, _callback)
    }

    
  }






  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" >Welcome to React</h1>
        </header>
        <MemoryGame posPiced={[this.state.pick1Pos,this.state.pick2Pos]}faces={faces} compare={this.compareFaces} />
      </div>
    );
  }
}

export default App;
