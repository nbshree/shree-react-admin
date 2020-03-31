import LoginTest from "../components/loginTest";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from "../store/action";

// function mapStateToProps(state) {
//     return {toLogin:state.login};
// }
const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(login(true)),
});

export default connect(
    null,
    mapDispatchToProps
)(LoginTest);
