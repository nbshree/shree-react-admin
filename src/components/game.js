import React, {Component} from 'react';
import Board from './board';
import {BrowserRouter as Router, Link} from "react-router-dom";

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tip: "X",
            mapBox: Array(9).fill(null),
            disabled: false
        }
    }

    handleClick(i) {
        if (!this.state.mapBox[i]) {
            let newMapBox = this.state.mapBox;
            newMapBox[i] = this.state.tip;
            this.setState((state) => ({
                mapBox: newMapBox,
                tip: state.tip === "X" ? "O" : "X"
            }));
            if (calculateWinner(this.state.mapBox)) {
                this.setState({
                    disabled: true
                })
            }
        }
    }

    reStart() {
        this.setState({
            mapBox: Array(9).fill(null),
            disabled: false,
            tip: "X"
        })
    }
    jump(){
        this.props.history.push('/test');
    }
    render() {
        let status;
        let winner = calculateWinner(this.state.mapBox);
        if (winner) {
            status = "Winner:" + winner;
        } else {
            status = "Next player:" + this.state.tip;
        }
        return (
            <div>
                <div style={{float: "left"}}>
                    <p onClick={()=>{this.jump()}}>test</p>
                </div>
                <p><Link to="/">Home</Link></p>
                <Board mapBox={this.state.mapBox} disabled={this.state.disabled} handleClick={(e) => {
                    this.handleClick(e)
                }}/>
                <div style={{marginLeft: "20px", float: "left"}}>
                    <p>{status}</p>
                    <button onClick={() => {
                        this.reStart()
                    }}>reStart
                    </button>
                </div>
            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return false;

}
