import React from "react";
import "./Interact.css";

const Interact = () =>
    // possible html + css styling below...

    // <div className=".mx-auto px-4"/>
    // <div className="mx-auto">

    <div className="d-flex justify-content-center" id="interact-box">

        <div className="col-1">
        </div>

        <div className="col-2">
        </div>

        <div className="col-1">
            {/* <a className="btn btn-primary btn-md" id="inquire-btn" href="">Inquire</a> */}

            {/* <button type="button" class="btn btn-primary" id="confirm-btn" data-toggle="modal" data-target="#inquireModal">
                Inquire
            </button> */}

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Inquire
            </button>

        
        </div>

        <div className="col-1">
        </div>

        <div className="col-1">
        </div>



        <div className="col-1">
            <button type="button" class="btn btn-primary" id="view-btn" data-toggle="modal" data-target="#exampleModalLong">
                Reviews
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Buyer/Item Review</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {/* <div class="modal-body"> */}
                        <div class="modal-dialog">
                            Hello,

                            My name is ronaldo Deguzman. I am sitting at starbucks right now doing my coding project.  Currently, I am working on a modal pop up.  There is one issue however.  Right now the text inside the modal pop up does not stay within the modal box.  I wonder why that is?  I am going to manipulate the modal html.  If i do not find a resolution that way, I will create a html element id and put specific id paramaters such as text staying within the box.  I do not recall the text code or function but I will use the wrap function to accomplish this goal.

                            <br />
                            I just refreshed the page with the goal of how the html takes the paragraph above.  The text remained inside of the modal.  When I use react's state ability and set te webapge to the database, I will hope that the database infromation store will remain inside of the modal box. Right now the most apparent issue is the create a paragarph / line break in the html code.
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-2">
        </div>


        <div className="col-2">

            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" id="confirm-btn" data-toggle="modal" data-target="#exampleModal">
                Confirm
                </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="confirmModal">Confirm Rental</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Clicking "Ok" will confirm your rental.
                                </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-2">
        </div>

    </div>

export default Interact;
