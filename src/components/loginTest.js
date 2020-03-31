import React from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom'
const loginTest =  (props) => {
    const login = ()=>{
        props.history.push('/');
        props.onClick();
    };
    if(localStorage.getItem("login")==="true"){
        // console.log(props.history)
        // props.history.push('/');
        return (<Redirect to="/game"/>);
        // return (<div></div>);
    }else{
        return(
            <div>
                <button onClick={login}>登录</button>
            </div>
        )
    }
};
loginTest.propTypes = {
    onClick: PropTypes.func.isRequired,
};
export default loginTest;
