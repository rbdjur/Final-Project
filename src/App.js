import React, { Component } from 'react';
import logo from './logo.svg';


import Navbar from "./components/Navbar/Navbar"
import Jumbotron from "./components/Jumbotron/Jumbotron"

// import Calendar from "./components/Calendar/Calendar"
import { DateRange } from 'react-date-range';


// import Confirm from "./components/Confirm/Confirm"
import Interact from "./components/Interact/Interact"
import Inquire from "./components/Inquire/Inquire"

import "./components/Navbar/Navbar.css";
import './App.css';
import "./components/Calendar/Calendar.css";


class App extends Component {

  state = {
    date: new Date(),
  }


  handleSelect(date) {
    console.log(date);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        
          <Navbar />
        
        <Jumbotron id="jumbotron" />

          <div className="row" >
          <div className="mx-auto" id="calendar">

            <DateRange id="date-range"
            onInit={this.handleSelect}
            onChange={this.handleSelect}
          />

          </div>
          </div>
       <Interact />
       <Inquire />
      </div>
    );
  }
}

export default App;

