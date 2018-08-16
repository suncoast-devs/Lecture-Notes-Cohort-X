import React, { Component } from 'react';




class MemoryGame extends Component {
    render() {
        return (
            <div>
                {this.props.faces.map((face,i) => {
                    return <h1 key={i} onClick={() => this.props.compare(face)}>{face}</h1>
                })}
            </div>
        );
    }
}

export default MemoryGame;
