import React from "react";
import "./Jumbotron.css"
const Jumbotron = () =>
    //     <div className="jumbotron jumbotron-fluid" id="jumbotron">
    //         <div className="container">

    //     <h1 className="display-4">Hello, world!</h1>

    //     <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

    //     <hr className="my-4"/>
    //     <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

    //     <p className="lead">
    //       <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    //     </p>

    //   </div>

    // <div className="jumbotron jumbotron-fluid">
    //     <div className="container">
    //         <h1 className="display-1" id="item">Your Item</h1>
    //         {/* <img src=""/> */}
    //         <p className="lead"> </p>
    //         <p className="lead">
    //         </p>
    //     </div>
    // </div>

    <div className="jumbotron" id="jumbotron">
        <h1 className="display-4">(props.itemName)</h1>

        <img src="asdf" />
       
        <hr className="my-4" />

         <p className="lead">(props.itemDescription)</p>
        <p className="lead">(props.itemPrice)</p>


        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            
    </div>


export default Jumbotron;