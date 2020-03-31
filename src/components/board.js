import React, {Component} from 'react';
import Square from '@components/square'

class Board extends Component {
    render() {
        return (
            <ul className="squareUl clearfix">
                {this.props.mapBox.map((item, index) => {
                    return (
                        <Square key={index} q name={this.props.mapBox[index]} disabled={this.props.disabled}
                                handleClick={() => {
                                    this.props.handleClick(index)
                                }}/>
                    )
                })}
            </ul>
        );
    }
}

export default Board;
