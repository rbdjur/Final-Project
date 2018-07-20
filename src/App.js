import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import Calendar from "./components/Calendar/Calendar"
import Confirm from "./components/Confirm/Confirm"
import Interact from "./components/Interact/Interact"



class App extends Component {

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
        <Calendar />
        <Confirm />

      </div>
      // <div className="App">

      //   {* <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p> */}
      // // </div>
    );
  }
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
