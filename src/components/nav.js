import React, {Component} from 'react';
import {Link,withRouter,useHistory } from "react-router-dom";

const Nav = (props)=>{
    let history = useHistory();
    return (
        <div>
            <p onClick={()=>{history.push('/test')}}>gotoTest</p>
            <div style={{float: "left"}}>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/test">Test</Link></p>
                <p><Link to="/game">Game</Link></p>
            </div>
            <div style={{float: "left"}}>
                {props.children}
            </div>
        </div>
    )
}
export default withRouter(Nav);


