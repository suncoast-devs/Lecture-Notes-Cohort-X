import React, { Component } from 'react';

class ApiSearch extends Component {
    render() {
        console.log("Person ssearch", this.props)
        return (
            <div>
                Searching <br/>
                {this.props.match.params.category}<br/>
                for <br/>
                {this.props.match.params.name}<br/>
            </div>
        );
    }
}

export default ApiSearch;
