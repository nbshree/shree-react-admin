import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch, useHistory  } from "react-router-dom";
import Nav from "../components/nav";
import Home from "../components/home";
import Test from "../components/test";
import Game from "../components/game";
import {connect} from "react-redux";
import {login, logOut, getInfo} from '@/newstore/action'
const Layout=(props)=>{
    console.log(localStorage.getItem("JSESSIONID"))
    const divAll = ()=>{
        if (!localStorage.getItem("JSESSIONID")) {
            return (<Redirect to="/login"/>)
        } else {
            return (
                <div>
                    <div><h5>我是头</h5></div>
                    {/*<Router>*/}
                        <div className="App">
                            <Nav/>
                            <div style={{float: "left"}}>
                                <Route>
                                    {/*<IndexRoute component={Home}/>*/}
                                    <Route path="/" exact component={Home}/>
                                    {/*<Route path='/abc/:id' children={({ match ,location }) => (*/}
                                    {/*    <div>*/}
                                    {/*        {match ? <Home id={match.params.id} location={location}/>:<Test id={match.params.id} location={{location}}/> }*/}
                                    {/*        </div>)}/>*/}
                                    <Route path="/test/:id" component={Test}/>
                                    <Route path="/test" component={Test}/>
                                    <Route path="/game" component={Game}/>
                                </Route>
                            </div>
                        </div>
                    {/*</Router>*/}
                    <button onClick={() => {
                        props.dispatch(logOut())
                    }}>退出帐号</button>
                </div>
            );
        }
    }
    return (
        divAll()
    )
}
export default connect((state, props)=>({
    data: state.login,
    userInfo: state.user
}))(Layout);
