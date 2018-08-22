import React, { Component } from 'react';


import data from './data.json'

class Villain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            villain: {}
        }
    }


    componentDidMount() {
        const thisVillain = data.filter(v => v.id == this.props.match.params.id)[0]
        this.setState({
            villain: thisVillain
        })
    }

    render() {
        console.log(this.props.match)
        return (
            <div>
                <h1>{this.state.villain.name}</h1>
                <img src={this.state.villain.picture} />
            </div>
        );
    }
}

export default Villain;
