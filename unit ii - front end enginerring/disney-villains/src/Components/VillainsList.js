import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import data from './data.json'

class VillainsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }


    componentDidMount() {
        this.setState({ list: data })
    }

    render() {
        return (
            <ul>
                {this.state.list.map((villain, i) => {
                    return <li key={villain.id}>
                        <Link to={'/villains/' + villain.id}>
                            {villain.name}
                            <img src={villain.icon} />
                        </Link>
                    </li>
                })}
            </ul>
        );
    }
}

export default VillainsList;
