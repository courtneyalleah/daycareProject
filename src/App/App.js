import React, {Component} from 'react';
import '../css/daycare.css';
import HomePage from '../Homepage/HomePage.js';
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
          <div className="content">
             <Route path="/" component={HomePage}/>
          </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
