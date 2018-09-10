import React, { Component } from 'react';
import Card from './Card';

const FACES = ['🤖', '🐢', '🐼', '🐙', '👾', '👹', '🐢', '👾', '😱', '🤖', '🐲', '🐙', '😱', '👹', '🐼', '🐲']

class MemoryGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picks: [], 
            matched: []
        }
    }

    choose = (chosenIndex) => {
        if (this.state.picks.length < 2) {
            this.setState({
                picks: this.state.picks.concat(chosenIndex)
            }, () => {
                if (this.state.picks.length ===2){
                    if (FACES[this.state.picks[0]] === FACES[this.state.picks[1]]) {
                        this.setState({
                            matched: this.state.matched.concat(this.state.picks),
                            picks:[]
                        })
                    } else {
                        this.setState({
                            picks:[]
                        })
                    }
                }
            })
            // check to see if player has two cards
        }
    }

    render() {
        console.log({ state: this.state })
        return (
            <div>
                {FACES.map((face, i) => {
                    return <Card key={i} faceUpCards={this.state.picks.concat(this.state.matched)} displayText={face} index={i} choose={this.choose}/>
                })}
            </div>
        );
    }
}

export default MemoryGame;
