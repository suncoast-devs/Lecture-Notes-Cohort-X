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

    render() {
        return (
            <table>
                <tbody>
                    {this.state.game.board.map((row, i) => {
                        return <tr key={i}>{
                            row.map((col, j) => {
                                return <td key={j} className="cell">{this.state.game.board[i][j]}</td>
                            })
                        }</tr>
                    })}
                </tbody>
            </table>
        );
    }
}

export default Minesweeper;
