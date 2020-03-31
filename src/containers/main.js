import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import App from "../App";
import {Route} from "react-router-dom";
import Home from "../components/home";
import Test from "../components/test";
import Game from "../components/game";
import LoginTest from "./login";
import Login from "../containers/login";
import {BrowserRouter as Router, Link,Redirect} from 'react-router-dom';


function mapStateToProps(state) {
    return {loginType: state.login};
}

class Main extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.loginType)
    }

    // componentDidMount() {
    //     if (sessionStorage.getItem("login")) {
    //         console.log(1);
    //         return (<Redirect to="/login"/>)
    //     }
    // }

    render() {
        return (
            // <LoginTest/>
            <Router>
                <Route path="/*" exact component={App}/>
                <Route path="/login" component={Login}/>
            </Router>

        );
    }
}

export default connect(
    mapStateToProps,
)(Main);
