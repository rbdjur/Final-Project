import React from "react";
import "./Interact.css";

const Interact = () =>
    // possible html + css styling below...

    // <div className=".mx-auto px-4"/>
    // <div className="mx-auto">

    <div className="d-flex justify-content-center" id="interact-box">
        <div className="col-1">
        </div>

        <div className="col-3">
            <a className="btn btn-primary btn-md" id="inquire-btn" href="">Inquire</a>
        </div>

        <div className="col-1">
        </div>

        <div className="col-2">
            <a className="btn btn-primary btn-md" id="view-btn" href="">View Reviews</a>
        </div>

        <div className="col-1">
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
                            <h5 class="modal-title" id="exampleModalLabel">Confirm Rental</h5>
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

        <div className="col-1">
        </div>

        <div className="col-1">
        </div>
    </div>

export default Interact;
