import React from "react";
// import "./Interact.css";
import "../Interact/Interact.css"

// Components 
import Navbar from "../Navbar/Navbar"

import Jumbotron from "../Jumbotron/Jumbotron"

import { DateRange } from 'react-date-range'

import Interact from "../Interact/Interact"

// CSS Components 
import "../Navbar/Navbar.css";
import "../Interact/Interact.css";




const ConfirmationPage = () =>
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
    </div>

    export default ConfirmationPage;