import React from 'react'
import Appointment from './Appointment'

const AppointmentsRequests = (props) => {

    const prescriptions = props.prescriptions;

    return (
        <div>
            <div className="container my-5">
                <div className="row justify-content-between">
                    <div className="col-6">
                        <h2>Appointment Requests</h2>
                    </div>
                    <div className="col-5">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="number" placeholder="Roll/PF Number" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {prescriptions?.map((element) => {
                            return (
                                <div className="col-md-4" key={element.id}>
                                    <Appointment prescription={element}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentsRequests
