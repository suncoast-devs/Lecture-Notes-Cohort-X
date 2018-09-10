import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './Components/HomePage'
import Page2 from './Components/Page2'
import Page1 from './Components/Page1'
import Nav from './Components/Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/page1" exact component={Page1} />
            <Route path="/page2" exact component={Page2} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
