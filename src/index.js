import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Redirect} from 'react-router-dom'
import Game from '../src/components/game';
import Login from '../src/containers/login';
import Main from '../src/containers/main';
import Test from '../src/components/test';
import Home from "./components/home";
import {Provider} from 'react-redux'
import store from "./store/index";
import { BrowserRouter as Router, Link } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        {/*<Router>*/}
        {/*    <Route path="/" component={Main}/>*/}
        {/*</Router>*/}
        <Main/>
        {/*<App>*/}
        {/*    <Route path="/" exact component={Home}/>*/}
        {/*    /!*<Route path='/abc/:id' children={({ match ,location }) => (*!/*/}
        {/*    /!*    <div>*!/*/}
        {/*    /!*        {match ? <Home id={match.params.id} location={location}/>:<Test id={match.params.id} location={{location}}/> }*!/*/}
        {/*    /!*        </div>)}/>*!/*/}
        {/*    <Route path="/test" component={Test}/>*/}
        {/*    <Route path="/game" component={Game}/>*/}
        {/*    /!*<Redirect from="/test" to="/game"/>*!/*/}
        {/*</App>*/}
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
