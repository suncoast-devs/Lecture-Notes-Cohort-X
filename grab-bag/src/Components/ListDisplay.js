import React, { Component } from 'react';
import ListItem from './ListItem';

class ListDisplay extends Component {
    render() {
        return (
            <section>
                <ul>
                    {this.props.wordList.map((item, i) => {
                        return <ListItem key={i} displayText={item}/>
                    })}
                </ul>
            </section>
        );
    }
}

export default ListDisplay;
