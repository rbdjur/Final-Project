import React from "react";
import "./Inquire.css"
const Inquire = () =>

    <div>


       <div className="container">
                    <form class="needs-validation" novalidate>
                        <div class="form-row">


                            <div class="col-md-3 mb-3">
                                <label for="validationCustom01">First Name
                        </label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="First Name" required>
                                </input>

                                <div class="invalid-feedback">
                                Please provide a valid first name.
                        </div>
                            </div>


                            <div class="col-md-3 mb-3">
                                <label for="validationCustom02">Last Name</label>
                                <input type="text" class="form-control" id="validationCustom02" placeholder="Last Name" required>
                                </input>

                                <div class="invalid-feedback">
                                Please provide a valid email
                        </div>
                            </div>

                        </div>
                    </form>
                </div>


                <div className="container">
                    <form class="needs-validation" novalidate>
                        <div class="form-row">


                            <div class="col-md-3 mb-3">
                                <label for="validationCustom03">Phone Number
                        </label>
                                <input type="text" class="form-control" id="validationCustom03" placeholder="XXX-XXX-XXX" required>
                                </input>

                                <div class="invalid-feedback">Please provide a valid phone number.
                        </div>
                            </div>


                            <div class="col-md-3 mb-3">
                                <label for="validationCustom04">e-mail</label>
                                <input type="text" class="form-control" id="validationCustom04" placeholder="e-mail" required>
                                </input>

                                <div class="invalid-feedback">            Please provide a valid email
                        </div>
                            </div>
                        </div>
                    </form>
                </div>



                <div className="container">
                    <form class="needs-validation" novalidate>
                        <div class="form-row">


                            <div class="col-md-3 mb-3">
                                <label for="validationCustom05">City
                        </label>
                                <input type="text" class="form-control" id="validationCustom05" placeholder="City" required>
                                </input>

                                <div class="invalid-feedback">        Please provide a valid city.
                        </div>
                            </div>


                            <div class="col-md-3 mb-3">
                                <label for="validationCustom06">State</label>
                                <input type="text" class="form-control" id="validationCustom06" placeholder="State" required>
                                </input>

                                <div class="invalid-feedback">            Please provide a valid st
                        </div>
                            </div>

                            <div class="col-md-3 mb-3">
                                <label for="validationCustom07">Zip</label>
                                <input type="text" class="form-control" id="validationCustom07" placeholder="Zip" required>
                                </input>
                                <div class="invalid-feedback">
                                    Please provide a valid zip.
                             </div>
                            </div>
                        </div>
                    </form>
                </div>


                <div className="container">
                    <form class="needs-validation" novalidate>
                        <div class="form-row">
                            <div class="col-md-3 mb-3">
                                {/* <div class="col-md-3 mb-3"> */}
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>            <label class="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                    </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </form>

                    <div className="text-box">
                        <textarea name="message" rows="7" cols="60">
                            Enter Message
                </textarea>
                    </div>

                    <button class="btn btn-primary" type="submit">Submit
            </button>
                </div>
            </div>

            export default Inquire;
            
            
            
            
{/* <div class="form-group">                                <div class="form-check">                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>                                   <label class="form-check-label" for="invalidCheck">                                  Agree to terms and conditions
                        </label>

            <div class="invalid-feedback">                You must agree before submitting.
                        </div>
        </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form
                    </button> */}


            {/* </div> */}


            {/* //Example starter JavaScript for disabling form submissions if there are invalid fields */}

            {/* <script> */}

            {/* (function() {
    'use strict';                                       window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
     let validation = Array.prototype.filter.call(forms, function(form) {
                                             form.addEventListener('submit', function (event) {
                                                 if (form.checkValidity() === false) {
                                                     event.preventDefault();
                                                     event.stopPropagation();
                                                 }
                                                 form.classList.add('was-validated');
                                             }, false);
                                         });
                                       }, false);
                                     })(); */}
            {/* </script> */}


