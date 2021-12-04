import React, { useState } from 'react';
import Axios from 'axios'
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';



const ReserveTable = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [numGuests, setNumGuests] = useState(0);
    const [time, setTime] = useState("");
    const [date, setDate] = useState(new Date());

    const reserve = () => {
        Axios.post('http://localhost:3001/reserve', {
            firstName: firstName,
            lastLame : lastName,
            email : email,
            phone : phone,
            numGuests : numGuests,
            time : time,
            date: date
        }).then((response)=> {
            console.log(response);
        })
    }


    const handleFirstNameInputChange = (event) => {
        setFirstName({ ...firstName, firstName: event.target.value })
        //console.log(event.targer.value)
    }
    const handle = (e) => {
        console.log(e.targer.value)

    }
    //console.log(event.targer.value)
    const handleLastNameInputChange = (event) => {
        setLastName({ ...lastName, lastName: event.target.value })
    }
    const handleEmailInputChange = (event) => {
        setEmail({ ...email, email: event.target.value })
    }
    const handlePhoneInputChange = (event) => {
        setPhone({ ...phone, phone: event.target.value })
    }
    const handleNumGuestInputChange = (event) => {
        setNumGuests({ ...numGuests, numGuests: event.target.value })
    }
    const handleTimeInputChange = (event) => {
        setTime({ ...time, time: event.target.value })
    }
    const onChange = date => {
        setDate(date);
    };//
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className=" d-flex justify-content-center align-items-center container-lg ">

            <form className="row g-3 mt-3">
                <div class="row">
                    <div class="col">
                        <label htmlFor="inputFirst4" className="form-label">First Name</label>
                        <input onChange={(e) => {setFirstName(e.target.value);
                        }} 
                            type="text" className="form-control" id="inputFirst4" />

                    </div>
                    <div class="col">
                        <label htmlFor="inputLast4" className="form-label">Last Name</label>
                        <input onChange={(e) => {setLastName(e.target.value);
                        }}
                            type="text" className="form-control" id="inputLast4" />
                    </div>
                </div>
                <div class="row">
                    <div className="col">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input onChange={(e) => {setEmail(e.target.value);
                        }}
                            type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div class="col">
                        <label htmlFor="inputPhone4" className="form-label">Phone Number</label>
                        <input onChange={(e) => {setPhone(e.target.value);
                        }}
                            type="text" className="form-control" id="inputPhone4" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="inputGuestNum4" className="form-label mb-3">Number of Guests</label>
                        <br></br>
                        <input onChange={(e) => {setNumGuests(e.target.value);
                        }} type="number" id="inputGuestNum4" min="1" data-bind="value:replyNumber" />
                    </div>
                    <div className="col">
                        <label htmlFor="time" className="form-label mb-3">Time</label>
                        <TimePickerComponent id="time" onChange={(e) => {setTime(e.target.value);
                        }} />
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

                <button onClick={reserve}> Reserve Table </button>

                <div className="col-12">
                    <p />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                    <p />
                </div>

            </form>

        </div>
    )
}
export default ReserveTable;
//render(<ReserveTable />, document.querySelector("#root"));

