import React, { Component } from 'react';

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
        console.log("the item was choose: ", chosenIndex, this.state.picks)
        if (this.state.picks.length < 2) {
            this.setState({
                picks: this.state.picks.concat(chosenIndex)
            }, () => {
                console.log("state was updated")
                if (this.state.picks.length ===2){
                    if (FACES[this.state.picks[0]] === FACES[this.state.picks[1]]) {
                        console.log("matched!")
                        this.setState({
                            matched: this.state.matched.concat(this.state.picks),
                            picks:[]
                        })
                    } else {
                        this.setState({
                            picks:[]
                        })
                        console.log("nope, no match")
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
                    return <span
                        className="face-up-card-style"
                        onClick={() => this.choose(i)}
                        key={i}>
                        {face}
                    </span>
                })}
            </div>
        );
    }
}

export default MemoryGame;
