import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Jumbotron from "./components/Jumbotron/Jumbotron"

// import Calendar from "./components/Calendar/Calendar"
import { DateRange } from 'react-date-range';


import Confirm from "./components/Confirm/Confirm"
import Interact from "./components/Interact/Interact"



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
        <div>
          <Navbar />
        </div>

        <Jumbotron />
        <Interact />
        <div className="row">
          <div className="col-2">
          </div> 
          <div className="col-8">
          <DateRange
            onInit={this.handleSelect}
            onChange={this.handleSelect}
          />
          </div> 
          <div className="col-2">
          </div> 
        </div>
        <Confirm />

      </div>
    );
  }
}

export default App;

