import React, { Component } from 'react'
import Character from './Character'
import characters from './characters.json'
import {Link} from 'react-router-dom'

class CharacterList extends Component {
  render() {
    return (
      <section className="CharacterList">
       <div className="App">
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
             
            </li>
          </ul>
          </div>
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
