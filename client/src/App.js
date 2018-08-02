import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import './App.css';
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';

import Chat from "./components/Chat/Chat"

// import Testpage from "./components/Testpage/Testpage.js"

// import api from "./api"

class App extends Component {

  // state = {
  //   timestamp: "no timestamp yet",
  //   stuff: []
  // }

  // constructor(props) {
  //   super(props);

  // }



  render() {
    return (


// const App = () => ( 

  <Router>
    <div>
    {/* <Switch> */}
      <div>
<Route 
exact path="/Chat"
  component={Chat}
/>
 <Route 
  exact path="/Confirmation"
    component={ConfirmationPage}
  />
      </div>
{/* </Switch> */}
</div> 
</Router>

// );





      /* <Route exact path="/chat"
      //   component={Chat}
      //   /> */


      /* <Router> */
      /* <Route exact path="/Chat" component={Chat}
      /> */

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
