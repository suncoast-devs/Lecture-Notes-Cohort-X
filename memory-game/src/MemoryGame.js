import React, { Component } from 'react';




class MemoryGame extends Component {
    render() {
        return (
            <div>
                {this.props.faces.map((face,i) => {
                    if (this.props.posPiced.indexOf(i) >=0){
                        return <h1 key={i} onClick={() => this.props.compare(face, i)}>{face}</h1>
                    } else {
                        return <h1 key={i} onClick={() => this.props.compare(face, i)}>[hidden]</h1>

                    }
                })}
            </div>
        );
    }
}

export default MemoryGame;
