import React from "react";
import "./Jumbotron.css"
import JumbotronPic from "./JumbotronPic"
import JumbotronDescription from "./JumbotronDescription"
import JumbotronPrice from "./JumbotronPrice"
import JumbotronName from "./JumbotronName";







const Jumbotron = () =>

    <div className="jumbotron" id="jumbotron">
        <h1 className="display-4"> <JumbotronName/></h1>
        <hr className="my-4"/>
        <JumbotronPic/>
        <JumbotronName/>
        <JumbotronDescription/>
         <JumbotronPrice/>
        
    


         {/* <p className="lead">(props.itemDescription)</p> */}

          {/* <p className="lead">(props.itemPrice)</p> */}            
    </div>

export default Jumbotron;