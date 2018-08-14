import React, { Component } from 'react'

class Character extends Component {
  render() {
    const imageBaseUrl = "https:///wwwww......"
    return (
      <li className="character">
        <h2>{this.props.name}</h2>
        <img src={imageBaseUrl + this.props.image} />
        <p>{this.props.bio}</p>
      </li>
    )
  }
}

export default Character
