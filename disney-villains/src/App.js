import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import HomePage from './Components/HomePage'
import VillainsList from './Components/VillainsList'
import Villain from './Components/Villain'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          <Nav/>
          </header>
          <section className="body">
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/villains" exact component={VillainsList}/>
              <Route path="/villains/:id" exact component={Villain}/>
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
