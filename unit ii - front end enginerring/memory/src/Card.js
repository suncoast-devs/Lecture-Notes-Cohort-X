import React, { Component } from 'react';

class Card extends Component {
    render() {
        if (this.props.faceUpCards.includes(this.props.index)) {
            return (
                <span
                    className="face-up-card-style"
                >
                    {this.props.displayText}
                </span>
            )
        } else {
            return (
                <span
                    className="face-up-card-style"
                    onClick={() => this.props.choose(this.props.index)}
                >
                    [*]
            </span>
            );
        }
    }
}

export default Card;
