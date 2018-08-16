import React, { Component } from 'react';

const FACES = ['🤖', '🐢', '🐼', '🐙', '👾', '👹', '🐢', '👾', '😱', '🤖',  '🐲', '🐙', '😱', '👹', '🐼', '🐲']

class MemoryGame extends Component {
    render() {
        return (
            <div>
                {FACES.map((face, i) => {
                    return <span className="face-up-card-style" key={i}>{face}</span>
                })}
            </div>
        );
    }
}

export default MemoryGame;
