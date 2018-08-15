import React, { Component } from 'react';

class TeamScoreBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0, 
            name:'',
            displayName:'Team Name'
        }
    }




    addOneToScore = () => {
        console.log(this)
        this.setState({
            score: this.state.score + 1
        })
    }

    removeOneToScore = () => {
        if (this.state.score > 0){
            this.setState({
                score: this.state.score - 1
            })
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
