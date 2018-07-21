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
        <Interact/>
        <DateRange 
        onInit={this.handleSelect}
        onChange={this.handleSelect}
        />
        <Confirm />

      </div>
    );
  }
}

export default App;

