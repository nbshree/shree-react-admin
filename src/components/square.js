import React, {Component} from 'react';

class Square extends Component {
    // handleClick(i){
    //     this.props.handleClick(i)
    // }
    render() {
        return (
            <li className="squareLi">
                <button disabled={this.props.disabled} className="square" onClick={() => {
                    this.props.handleClick()
                }}>{this.props.name}</button>
            </li>
        );
    }
}

export default Square;
