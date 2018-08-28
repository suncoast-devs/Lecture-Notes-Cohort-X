import React, { Component } from 'react';

class ListDisplay extends Component {
    render() {
        return (
            <section>
                <ul>
                    {this.props.wordList.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </section>
        );
    }
}

export default ListDisplay;
