import React from "react";
import "./Inquire.css"
const Inquire = () =>

    <div className="container">
        <form class="needs-validation" novalidate>
            <div class="form-row">


                <div class="col-md-4 mb-3">
                    <label for="validationCustom01">First name</label>
                    <input type="text" class="form-control"
                        id="validationCustom01" placeholder="First name" value="Your First Name" required>
                    </input>
                    <div class="valid-feedback">
                        Looks good!
                </div>
                </div>


                <div class="col-md-4 mb-3">
                    <label for="validationCustom02">Last Name</label>
                    <input type="text" class="form-control"
                        id="validationCustom02" placeholder="First name" value="Your Last Name" required>
                    </input>
                    <div class="valid-feedback">
                        Looks good!
                </div>
                </div>
            </div>
        </form>

        {/* May need this  */}
        {/* <div class="col-md-4 mb-3">
            <label for="validationCustomUsername">Username
                      </label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                </div>
            </div>
        </div> */}

        {/* May need this  */}
            {/* <input type="text" class="form-control"                     id="validationCustomUsername"                           placeholder="Username"                                  aria-describedby="inputGroupPrepend" required>
            </input>
                 <div class="invalid-feedback">
                    Please choose a username.
                </div> */}

        {/* </div> */}


                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom03">City</label>
                            <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
                            </input>
                                <div class="invalid-feedback">
                                     Please provide a valid city.
                                </div>
                    </div>
                </div>



                <div class="col-md-3 mb-3">                             <label for="validationCustom04">State</label>            <input type="text" class="form-control"                id="validationCustom04"                             placeholder="State" required>
                        </input>                            
                            <div class="invalid-feedback">            Please provide a valid st
                            </div> 
                </div>

                 <div class="col-md-3 mb-3">
                    <label for="validationCustom05">Zip</label>
                        <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
                        </input>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                    </div>



                <div class="form-group">                                <div class="form-check">                                <input class="form-check-input"                     type="checkbox" value="" id="invalidCheck"          required></input>                                   <label class="form-check-label"                      for="invalidCheck">                                  Agree to terms and conditions
                        </label>

                        <div class="invalid-feedback">                You must agree before submitting.   
                        </div> 
                    </div>                                     
                </div>
                    <button class="btn btn-primary" type="submit">Submit form
                    </button>






























    </div>































//                                     <script>
//                                         Example starter JavaScript for disabling form submissions if there are invalid fields


// (function() {
//                                             'use strict';
//                                         window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//                                         // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//                                             form.addEventListener('submit', function (event) {
//                                                 if (form.checkValidity() === false) {
//                                                     event.preventDefault();
//                                                     event.stopPropagation();
//                                                 }
//                                                 form.classList.add('was-validated');
//                                             }, false);
//                                         });
//                                       }, false);
//                                     })();
// </script>






//                                 </div> */}




export default Inquire;
