import React, { Component } from "react";
import "./Messagebox.css"


class Messagebox extends Component {

    state = {
        textbox: []
    }
    
    handleClick = event => {
    
    }

    render() {
        return (
            <div className="col-12" id="outside-m-box">
            <form action="" id="outside-m-box">
                {/* <textarea id="m" autocomplete="off">
                inside text area
                </textarea> */}

                outside text area
                <ul id="messages"></ul>
                {/* <button>Send</button> */}
            </form>
            </div>
        )
    }
}



export default Messagebox