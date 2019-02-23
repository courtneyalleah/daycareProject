import React, {Component} from 'react';
import '../css/daycare.css';
import HomePage from '../Homepage/HomePage';
import Lessons from '../Homepage/Navigation/Lessons/lessons';
import Menus from '../Homepage/Navigation/Menus/menus';
import UpcomingEvents from '../Homepage/Navigation/UpcomingEvents/upcoming-events';
import ContactUs from '../Homepage/Navigation/ContactUs/contact-us';
import Careers from '../Homepage/Navigation/Careers/careers';
import PayYourBillOnline from '../Homepage/Navigation/PayYourBillOnline/pay-your-bill-online';
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
             <Route exact path="/" component={HomePage}/>
             <Route exact path="/lessons" component={Lessons}/>
             <Route exact path="/menus" component={Menus}/>
             <Route exact path="/upcomingevents" component={UpcomingEvents}/>
             <Route exact path="/contactus" component={ContactUs}/>
             <Route exact path="/careers" component={Careers}/>
             <Route exact path="/payyourbillonline" component={PayYourBillOnline}/>
          </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
