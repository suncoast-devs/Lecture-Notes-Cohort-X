import React, { Component } from 'react';

const BASE_URL = 'https://minesweeper-api.herokuapp.com/'

class Minesweeper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: {
                board: []
            }
        }
    }


    componentDidMount() {
        fetch(`${BASE_URL}games`, {
            method: "POST",
            body: JSON.stringify({ difficulty: 0 }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(newGame => {
                console.log(newGame)
                this.setState({
                    game: newGame
                })
            })
    }

    handleCellClick = (row, col) => {
        console.log("clicked", row, col)
        fetch(`${BASE_URL}games/${this.state.game.id}/check`, {
            method: "POST",
            body: JSON.stringify({ row:row, col:col }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(newGameState => {
                console.log(newGameState)
                this.setState({
                    game: newGameState
                })
            })
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.state.game.board.map((row, i) => {
                        return <tr key={i}>{
                            row.map((col, j) => {
                                return <td key={j} className="cell"
                                    onClick={() => this.handleCellClick(i,j)}>{this.state.game.board[i][j]}</td>
                            })
                        }</tr>
                    })}
                </tbody>
            </table>
        );
    }
}

export default Minesweeper;
