import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import Layout from "./layout";
import {Route} from "react-router-dom";
import Home from "../components/home";
import Test from "../components/test";
import Game from "../components/game";
import LoginTest from "./login";
import Login from "@/page/login";
import {BrowserRouter as Router, Link,Redirect} from 'react-router-dom';

const Main = ()=>{
    return (
        <Router>
            <Route path="/*" exact component={Layout}/>
            <Route path="/login" component={Login}/>
        </Router>

    );
}

export default Main;
