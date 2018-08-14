import React, { Component } from 'react'
import CharacterList from './CharacterList'

import Character from './Character'

class App extends Component {
  render() {
    const title = 'Adventure Time'
    return (
      <div className="App">
        <header>
          <h1>{title}</h1>
          <CharacterList />
        </header>
      </div>
    )
  }
}

export default App
