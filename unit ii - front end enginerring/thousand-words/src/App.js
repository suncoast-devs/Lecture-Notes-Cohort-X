import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './Components/HomePage'
import ApiSearch from './Components/ApiSearch';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/:category/search/:name" exact component={ApiSearch} />
            {/* <Route path="/movie/:id" exact component={MovieComponent} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
