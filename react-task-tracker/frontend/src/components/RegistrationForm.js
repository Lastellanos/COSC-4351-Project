import React from 'react'

export const RegistrationForm = () => {
    return (
        <div className=" d-flex justify-content-center align-items-center container-lg ">

            <form className="row g-3 mt-3">
                <div class="row">
                    <div class="col">
                        <label htmlFor="inputFirst4" className="form-label">First Name</label>
                        <input
                            type="text" className="form-control" id="inputFirst4" />

                    </div>
                </div>
                <div className="row">
                    <div class="col">
                        <label htmlFor="inputLast4" className="form-label">Last Name</label>
                        <input
                            type="text" className="form-control" id="inputLast4" />
                    </div>
                </div>
                <div class="row">
                    <div className="col">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input
                            type="email" className="form-control" id="inputEmail4" />
                    </div>
                </div>

                <div className="row">
                    <div class="col">
                        <label htmlFor="inputPhone4" className="form-label">Password</label>
                        <input
                            type="password" className="form-control" id="inputPhone4" />
                    </div>
                </div>
                <div className="row">
                    <div class="col">
                        <label htmlFor="inputPhone4" className="form-label">Confirm Password</label>
                        <input
                            type="password" className="form-control" id="inputPhone4" />
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
