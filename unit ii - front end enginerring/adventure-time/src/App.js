import React, { Component } from 'react'
import CharacterList from './CharacterList'
import OneCharacter from './OneCharacter';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={AllCharactersList}></Route>
          <Route path="/heros" exact component={HeroList}></Route>
          <Route path="/villians" exact component={VillanList}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
