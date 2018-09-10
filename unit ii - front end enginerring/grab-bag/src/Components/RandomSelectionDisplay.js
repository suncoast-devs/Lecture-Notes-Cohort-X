import React, { Component } from 'react';

class RandomSelectionDisplay extends Component {
    render() {
        if (this.props.selectedWord){
            return (
                <section>
                    <h1>The selected value is {this.props.selectedWord}</h1>
                </section>
            );
        } else {
            return <section>
                <h1>&nbsp;</h1>
            </section>
        }
    }
}

export default RandomSelectionDisplay;
