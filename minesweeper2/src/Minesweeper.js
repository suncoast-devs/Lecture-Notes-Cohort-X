import React, { Component } from 'react';

const BASE_URL = 'https://minesweeper-api.herokuapp.com/'

class Minesweeper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: {
                board: []
            },
            message: '',
            level: 0
        }
    }

    createGame() {
        fetch(`${BASE_URL}games`, {
            method: "POST",
            body: JSON.stringify({ difficulty: this.state.level }),
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

    componentDidMount() {
        this.createGame()
    }

    checkCellWithAPI = (action, row, col) => {
        fetch(`${BASE_URL}games/${this.state.game.id}/${action}`, {
            method: "POST",
            body: JSON.stringify({ row: row, col: col }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(newGameState => {
                this.setState({
                    game: newGameState,
                }, () => {
                    this.props.updateMessage(this.state.game.state)
                })
            })
    }

    handleCellClick = (row, col) => {
        if (this.state.game.state !== "lost" && this.state.game.state !== "won") {
           this.checkCellWithAPI("check", row, col)
        }

    }

    handleFlaggedCell = (event, row, col) => {
        event.preventDefault()
        this.checkCellWithAPI("flag", row, col)

    }

    resetEvent = () => {
        this.createGame()
    }

    handleDifficultyChange = (event) => {
        this.setState({
            level: event.target.value
        }, () => {
            this.createGame()
        })
    }

    render() {
        return (
            <div>
                <section>
                    <select onChange={(event) => this.handleDifficultyChange(event)}>
                        <option value="0">Easy</option>
                        <option value="1">Normal</option>
                        <option value="2">Haaaard</option>
                    </select>
                    <button onClick={this.resetEvent}><span role="img">😄</span></button>
                </section>
                <table>
                    <tbody>
                        {this.state.game.board.map((row, i) => {
                            return <tr key={i}>{
                                row.map((col, j) => {
                                    return <td
                                        key={j}
                                        className="cell"
                                        onClick={() => this.handleCellClick(i, j)}
                                        onContextMenu={(event) => this.handleFlaggedCell(event, i, j)}
                                    >{this.state.game.board[i][j]}</td>
                                })
                            }</tr>
                        })}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Minesweeper;
