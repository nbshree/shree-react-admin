import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Redirect} from 'react-router-dom'
import Game from '../src/components/game';
import Login from '../src/page/login';
// import Main from '../src/containers/main';
// import Login from '../src/containers/main';
import Test from '../src/components/test';
import Home from "./components/home";
import {Provider} from 'react-redux'
import store from "./newstore/index";

import { BrowserRouter as Router, Link } from 'react-router-dom';

ReactDOM.render(
    // <Provider store={store}>
    //     <Login/>
    // </Provider>,
    <Login/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
