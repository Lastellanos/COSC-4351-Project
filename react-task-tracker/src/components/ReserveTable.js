import React, { useState } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';

export const ReserveTable = () => {


    const [date, setDate] = useState(new Date());


    const onChange = date => {
        setDate(date);
    };//

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        numGuests: 0,
        time: ""
        //date: ""

    })
    const handleFirstNameInputChange = (event) => {
        setValues({ ...values, firstName: event.target.value })
        //console.log(event.targer.value)
    }
    const handle = (e) => {
        console.log(e.targer.value)

    }
    //console.log(event.targer.value)
    const handleLastNameInputChange = (event) => {
        setValues({ ...values, lastName: event.target.value })
    }
    const handleEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }
    const handlePhoneInputChange = (event) => {
        setValues({ ...values, phone: event.target.value })
    }
    const handleNumGuestInputChange = (event) => {
        setValues({ ...values, numGuests: event.target.value })
    }
    const handleTimeInputChange = (event) => {
        setValues({ ...values, time: event.target.value })
    }
    const handleDateInputChange = (event) => {
        setValues({ ...values, date: event.target.value })
    }
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className=" d-flex justify-content-center align-items-center container-lg ">

            <form className="row g-3 mt-3">
                <div class="row">
                    <div class="col">
                        <label htmlFor="inputFirst4" className="form-label">First Name</label>
                        <input onChange={handleFirstNameInputChange} value={values.firstName}
                            type="text" className="form-control" id="inputFirst4" />

                    </div>
                    <div class="col">
                        <label htmlFor="inputLast4" className="form-label">Last Name</label>
                        <input onChange={handleLastNameInputChange} value={values.lastName}
                            type="text" className="form-control" id="inputLast4" />
                    </div>
                </div>
                <div class="row">
                    <div className="col">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input onChange={handleEmailInputChange} value={values.email}
                            type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div class="col">
                        <label htmlFor="inputPhone4" className="form-label">Phone Number</label>
                        <input onChange={handlePhoneInputChange} value={values.phone}
                            type="text" className="form-control" id="inputPhone4" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="inputGuestNum4" className="form-label mb-3">Number of Guests</label>
                        <br></br>
                        <input onChange={handleNumGuestInputChange} value={values.numGuests} type="number" id="inputGuestNum4" min="1" data-bind="value:replyNumber" />
                    </div>
                    <div className="col">
                        <label htmlFor="time" className="form-label mb-3">Time</label>
                        <TimePickerComponent id="time" onChange={handleTimeInputChange} defaultValue={values.time} />
                    </div>

                </div>

                <div className="row" text-align="center">
                    <p /><p />
                    <div className="col">
                        <Calendar onChange={onChange} value={date} />
                        {//console.log(date)}
                        }
                    </div>
                </div>

                <div className="col-12">
                    <p />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <p />
                </div>

            </form>


        </div>
    )
}
//render(<ReserveTable />, document.querySelector("#root"));

