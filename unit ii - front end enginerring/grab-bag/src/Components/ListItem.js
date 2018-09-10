import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li>{this.props.displayText}</li>
        );
    }
}

export default ListItem;
