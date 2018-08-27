import React, { Component } from 'react';

class LetterButton extends Component {
    render() {
        if (this.props.picked.includes(this.props.letter)) {
            return (
             <span></span>
            )
        } else {

            return (
                <button onClick={() => this.props.addLetterHandler(this.props.letter)}>
                    {this.props.letter}
                </button>
            );
        }
    }
}

export default LetterButton;
