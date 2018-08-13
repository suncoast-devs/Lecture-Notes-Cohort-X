import React, { Component } from 'react'

class Character extends Component {
  render() {
    return (
      <li className="character">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} />
        <p>{this.props.bio}</p>
      </li>
    )
  }
}

export default Character
