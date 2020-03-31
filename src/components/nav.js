import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";
import { createBrowserHistory } from 'history'; // 如果是history路由
const history = createBrowserHistory();
class Nav extends Component {
    constructor(props) {
        super(props);
    }
    jump(){
        // history.push('/test');
        this.props.history.push('/test');
    }
    render() {
        return (
            <div>
                <p onClick={()=>{this.jump()}}>gotoTest</p>
                <div style={{float: "left"}}>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/test">Test</Link></p>
                    <p><Link to="/game">Game</Link></p>
                </div>
            </div>
        );
    }
}

export default withRouter(Nav);
