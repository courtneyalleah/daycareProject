import React, {Component} from 'react';
import '../../css/App.css';
import HomePage from '../Homepage/HomePage';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
          </ul>
          <div className="content">
             <Route path="/" component={HomePage}/>
          </div>
      </div>
      </HashRouter>
    );
      
    
  }
}

export default App;