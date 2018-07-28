import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar"
import Jumbotron from "./components/Jumbotron/Jumbotron"
// import Calendar from "./components/Calendar/Calendar"
import { DateRange } from 'react-date-range';

// import Confirm from "./components/Confirm/Confirm"
import Interact from "./components/Interact/Interact"
import Inquire from "./components/Inquire/Inquire"
import "./components/Navbar/Navbar.css";
import './App.css';
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';
// import "./components/Calendar/Calendar.css";

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
      <Router>
        <Route exact path="/Confirmation" 
          component={ConfirmationPage}
          />
      </Router>

    )
  }
}

export default App;


















































{/* <Router>
         <div>
         <Navbar/>
         <Route exact path="/" component={stuff}>
         
         </div>
         </Router> */}

















































      //    render() {
      //     return (
      //         <div>



      //         <Jumbotron id="jumbotron" />

      //         <div className="row" >
      //           <div className="mx-auto" id="calendar">

      //             <DateRange id="date-range"
      //               onInit={this.handleSelect}
      //               onChange={this.handleSelect}
      //             />

      //           </div>
      //         </div>
      //         <Interact />
      //       </div>
      //     );
      //   }
      // }

      // export default App;
