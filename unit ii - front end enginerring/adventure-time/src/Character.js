import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Character extends Component {
  render() {
    const imageBaseUrl = "https:///wwwww......"
    return (
      <li className="character">
        <Link to={"/villain/" + this.props.id}>
          <h2>{this.props.name}</h2>
          <img src={this.props.image} />
          <p>{this.props.bio}</p>
        </Link>
      </li>
    )
  }
}

export default Character
