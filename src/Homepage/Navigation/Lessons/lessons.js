import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Lessons extends Component {

  render() {
    return(
      <div>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/lessons">Lessons</NavLink></li>
          <li><NavLink to="/menus">Menus</NavLink></li>
          <li><NavLink to="/upcomingevents">Upcoming Events</NavLink></li>
          <li><NavLink to="/contactus">Contact Us</NavLink></li>
          <li><NavLink to="/careers">Careers</NavLink></li>
          <li><NavLink to="/payyourbillonline">Pay Your Bill Online</NavLink></li>
        </ul>

      </div>

    );
  }
}

export default Lessons;
