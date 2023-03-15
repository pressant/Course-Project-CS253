import React from 'react'

const DoctorAppointments = () => {
    return (
        <div className="container">
            <h2 className="text-center my-5">Current Appointment Status</h2>
            <div className="row justify-content-between">
                <div className="col-4">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="number" placeholder="Doctor Name" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                    <ul class="list-group my-5">
                        <li class="list-group-item">Dr. A</li>
                        <li class="list-group-item">Dr. B</li>
                        <li class="list-group-item">Dr. C</li>
                        <li class="list-group-item">Dr. D</li>
                        <li class="list-group-item">Dr. E</li>
                    </ul>
                </div>
                <div className="col-7 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">Current Patient</div>
                            <div className="col-6">Mr. ABCD - 123456</div>
                        </div>
                        <div className="row text-center my-5">
                            <div>Patients in Queue</div>
                        </div>
                        <div class="list-group">
                            <button type="button" class="list-group-item list-group-item-action" aria-current="true">Patient 1 - 210001</button>
                            <button type="button" class="list-group-item list-group-item-action">Patient 2 - 210002</button>
                            <button type="button" class="list-group-item list-group-item-action">Patient 3 - 210003</button>
                            <button type="button" class="list-group-item list-group-item-action">Patient 4 - 210004</button>
                            <button type="button" class="list-group-item list-group-item-action active">Add New Patient</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorAppointments
