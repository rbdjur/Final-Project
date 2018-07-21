import React from "react";
import "./Interact.css";

const Interact = () =>
    <div className="container">
        <div className="row">
        </div>
        <div className="row">
            <div className="col-1">
                {/* col-2
                  1 of 3 */}
            <a className="btn btn-primary btn-sm" href="" role="button" id="rent-btn">Rent</a>
            {/* // * for the rent button, add a modal pop up with 2 calendar icons dividing the page into halves with calendar pop up to select date
            // "FROM" -> "TO" */}
            </div>
            <div className="col-2">
                {/* col-2
                  2 of 3 */}
                  <a className="btn btn-primary btn-sm" href="" role="button" id="question-btn">Ask A Question</a>

            {/* // * for the "Ask A Question" button, add a modal pop with a field text input form and a submission button. */}

            </div>
            <div className="col-1">
                {/* col-2
                3 of 3 */}
                <a className="btn btn-primary btn-sm" href="" role="button" id="reviews-btn">Reviews</a>
            {/* // * for the "Ask A Question" button, add a modal pop with a field text input form and a submission button. */}
            </div>
            <div className="col-9">
            
    </div>
        </div>





        <div>
            {/* <a class="btn btn-primary btn-sm" href="" role="button">Rent</a>
// * for the rent button, add a modal pop up with 2 calendar icons dividing the page into halves with calendar pop up to select date

// "FROM" -> "TO" */}

            {/* <a class="btn btn-primary btn-sm" href="" role="button">Ask A Question</a>

            // * for the "Ask A Question" button, add a modal pop with a field text input form and a submission button. */}

            {/* <a class="btn btn-primary btn-sm" href="" role="button">Reviews</a>
        // * for the "Ask A Question" button, add a modal pop with a field text input form and a submission button. */}

        </div>
    </div>

export default Interact;
