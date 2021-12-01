import React, { useState } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';

export const ReserveTable = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
        <div className=" d-flex justify-content-center align-items-center container-lg ">

            <form className="row g-3 mt-3">
                <div class="row">
                    <div class="col">
                        <label for="inputFirst4" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="inputFirst4" />
                    </div>
                    <div class="col">
                        <label for="inputLast4" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="inputLast4" />
                    </div>
                </div>
                <div class="row">
                    <div className="col">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div class="col">
                        <label for="inputPhone4" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="inputPhone4" />
                    </div>
                </div>
                <div class="row">
                    <div className="col">
                        <label for="inputGuestNum4" className="form-label mb-3">Number of Guests</label>
                        <br></br>
                        <input type="number" id="inputGuestNum4" min="1" data-bind="value:replyNumber" />
                    </div>
                </div>

                <div class="container" text-align="center">
                    <Calendar onChange={onChange} value={date} />
                    {console.log(date)}
                    {date.toString()}

                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>


        </div>
    )
}
render(<ReserveTable/>, document.querySelector("#root"));

