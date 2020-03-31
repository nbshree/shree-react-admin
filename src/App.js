import React, {Component} from 'react';
import './App.css';
import Game from '../src/components/game';
import Test from '../src/components/test';
import Home from '../src/components/home';
import Nav from '../src/components/nav';
import {logOut} from "./store/action";
import {connect} from 'react-redux';
import store from "./store/index";
import {BrowserRouter as Router, browserHistory, Redirect, Route, withRouter, Switch} from 'react-router-dom';

// import {Switch} from "react-router-dom";
class App extends Component {
    componentDidMount() {
        console.log(this.props.location);
        store.subscribe(() => {
            this.jumpLogin()
        }) //订阅Redux的状态
    }

    logOut() {
        store.dispatch(logOut(false));
    }

    jumpLogin() {
        if (!store.getState().login) {
            this.props.history.push('/login');
        }
    }

    render() {
        if (localStorage.getItem("login") === "false") {
            return (<Redirect to="/login"/>)
        } else {
            return (
                <div>
                    <div><h5>我是头</h5></div>

                    <Router>
                        <div className="App">
                            <Nav/>
                            {/*<div style={{float:"left"}}>{this.props.children}</div>*/}
                            <div style={{float: "left"}}>
                                <Switch>
                                    <Route path="/" exact component={Home}/>
                                    {/*<Route path='/abc/:id' children={({ match ,location }) => (*/}
                                    {/*    <div>*/}
                                    {/*        {match ? <Home id={match.params.id} location={location}/>:<Test id={match.params.id} location={{location}}/> }*/}
                                    {/*        </div>)}/>*/}
                                    <Route path="/test/:id" component={Test}/>
                                    <Route path="/test" component={Test}/>
                                    <Route path="/game" component={Game}/>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                    <button onClick={() => this.logOut()}>退出帐号</button>
                </div>
            );
        }
    }
};
export default withRouter(App);
