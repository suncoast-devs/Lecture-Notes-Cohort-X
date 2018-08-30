import React, { Component } from 'react';

class TeamScoreBoard extends Component {

    constructor(props) {
        super(props);

        let _score = localStorage.getItem(this.props.teamName + "-team-score")
        _score = _score ? parseInt(_score, 10) : 0
        this.state = {
            score: _score,
            name: '',
            displayName: 'Team Name'
        }
    }


    updateScore = (score) => {
        localStorage.setItem(this.props.teamName + "-team-score", score)
        this.setState({
            score: score
        })
    }

    addOneToScore = () => {
        this.updateScore(this.state.score + 1)
    }

    removeOneToScore = () => {
        if (this.state.score > 0) {
            this.updateScore(this.state.score - 1)
        }
    }

    updateTeamName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateTeamNameDisplay = () => {
        this.setState({
            displayName: this.state.name
        })
    }

    render() {
        return (
            <section>
                <header>{this.state.displayName}</header>
                <h2>{this.state.score}</h2>
                <section>
                    <section>
                        <input
                            placeholder="Update Team Name"
                            value={this.state.name}
                            onChange={this.updateTeamName}
                        />
                        <button onClick={this.updateTeamNameDisplay}>Update Name</button>
                    </section>
                    <section>
                        <button onClick={this.addOneToScore}> add 1 to score</button>
                        <button onClick={this.removeOneToScore} >Subtract 1 to score</button>
                    </section>
                </section>
            </section>
        );
    }
}

export default TeamScoreBoard;
