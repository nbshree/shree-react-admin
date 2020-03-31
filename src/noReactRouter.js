import React,{Component} from 'react';
import Game from '../src/components/game';
import {Test} from '../src/components/test';
import Home from '../src/components/home';
import './App.css';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      route: window.location.hash.substr(1)
    }
  }
  componentDidMount(){
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }
  render() {
    let Child
    switch (this.state.route) {
      case '/game': Child = Game; break;
      case '/test': Child = Test; break;
      default:      Child = Home;
    }

    return (
        <div>
          <h1>App</h1>
          <ul>
            <li><a href="game">About</a></li>
            <li><a href="#/test">Inbox</a></li>
          </ul>
          <Child/>
        </div>
    )
  }
};
