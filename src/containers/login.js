import LoginTest from "../components/loginTest";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from "../newstore/action";

// function mapStateToProps(state) {
//     return {toLogin:state.login};
// }
const mapDispatchToProps = (dispatch) => ({
    onClick: (username,password) => dispatch(login({username,password})),
});

export default connect(
    null,
    mapDispatchToProps
)(LoginTest);
