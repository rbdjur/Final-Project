import React, { Component } from "react";
import "./Chatbox.css";
import "./Messageboard"
import "./Messagebox"
import Messageboard from "./Messageboard";
import Messagebox from "./Messagebox";
import Submit from "./Submit";

class Chatbox extends Component {

    render() {
        return(

            <div>
            <Messageboard/>
            <Messagebox/>
            <Submit/>
            </div>

        )
    }
}
// const Chatbox = () =>

// <div Classname="">


//     <div className="col-1">
//         {/* <a className="btn btn-primary btn-md" id="inquire-btn" href="">Inquire</a> */}

//         {/* <button type="button" class="btn btn-primary" id="confirm-btn" data-toggle="modal" data-target="#inquireModal">
//             Inquire
//         </button> */}

//         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Inquire
//         </button>
//         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog" role="document">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLabel">Contact Information</h5>
//                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div class="modal-body">


//                         <form class="needs-validation" novalidate>
//                             <div class="form-row">

//                                 <div class="col-md-3 mb-3">
//                                     <label for="validationCustom01">First Name
//                     </label>
//                                     <input type="text" class="form-control" id="validationCustom01" placeholder="First Name" required>
//                                     </input>

//                                     <div class="invalid-feedback">
//                                         Please provide a valid first name.
//                     </div>
//                                 </div>


//                                 <div class="col-md-3 mb-3">
//                                     <label for="validationCustom02">Last Name</label>
//                                     <input type="text" class="form-control" id="validationCustom02" placeholder="Last Name" required>
//                                     </input>

//                                     <div class="invalid-feedback">
//                                         Please provide a valid email
//                     </div>
//                                 </div>

//                             </div>
//                         </form>


//                         <form class="needs-validation" novalidate>
//                             <div class="form-row">


//                                 <div class="col-md-3 mb-3">
//                                     <label for="validationCustom03">Phone Number
//                     </label>
//                                     <input type="text" class="form-control" id="validationCustom03" placeholder="XXX-XXX-XXX" required>
//                                     </input>

//                                     <div class="invalid-feedback">Please provide a valid phone number.
//                     </div>
//                                 </div>


//                                 <div class="col-md-3 mb-3">
//                                     <label for="validationCustom04">e-mail</label>
//                                     <input type="text" class="form-control" id="validationCustom04" placeholder="e-mail" required>
//                                     </input>

//                                     <div class="invalid-feedback">            Please provide a valid email
//                     </div>
//                                 </div>
//                             </div>
//                         </form>



//                         <form class="needs-validation" novalidate>
//                             <div class="form-row">


//                                 <div class="col-md-3 mb-3">
//                                     <label for="validationCustom05">City
//                     </label>
//                                     <input type="text" class="form-control" id="validationCustom05" placeholder="City" required>
//                                     </input>

//                                     <div class="invalid-feedback">        Please provide a valid city.
//                     </div>
//                                 </div>


//                                 <div class="col-md-3 mb-3">
//                                     <label for="validationCustom06">State</label>
//                                     <input type="text" class="form-control" id="validationCustom06" placeholder="State" required>
//                                     </input>

//                                     <div class="invalid-feedback">            Please provide a valid street
//                     </div>
//                                 </div>

//                                 <div class="col-md-3 mb-3">
//                                     <label for="validationCustom07">Zip</label>
//                                     <input type="text" class="form-control" id="validationCustom07" placeholder="Zip" required>
//                                     </input>
//                                     <div class="invalid-feedback">
//                                         Please provide a valid zip.
//                                     </div>
//                                 </div>

/* <div>

    <div className="col-4">
    </div>



    <div className="col-4">
        <ul id="messages"></ul>
        <form action="">
            <textarea id="m" autocomplete="off" /><button>Send</button>
        </form>
    </div>

    <div className="col-4">
    </div>

</div> */










/* </div>
</form>
</div>
</div>
</div>
</div>
</div>

</div> */






export default Chatbox