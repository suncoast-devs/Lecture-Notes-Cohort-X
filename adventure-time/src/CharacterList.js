import React, { Component } from 'react'
import Character from './Character'
import characters from './characters.json'

class CharacterList extends Component {
  render() {
    return (
      <section className="CharacterList">
        <ul>
          {characters.map((character, idx) => {
            return <Character 
                  name={character.name} 
                  image={character.image} 
                  bio={character.details} 
                  key={idx} />
          })}
        </ul>
      </section>
    )
  }
}

export default CharacterList
