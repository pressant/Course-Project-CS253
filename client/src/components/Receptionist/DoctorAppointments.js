import React from 'react'
const doctors=["Dr 1","Dr 2","Dr 3","Dr 4"];
const patients=["Pat 1","Pat 2","Pat 3","Pat 4"];

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
                    <ul className="list-group my-5">
                    {doctors.map((doctor) => (
                        <li class="list-group-item">{doctor}</li>
									))}
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
                            {patients.map((patient) => (
                                <button type="button" class="list-group-item list-group-item-action">{patient}</button>
                            ))}
                            <button type="button" class="list-group-item list-group-item-action active">Add New Patient</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorAppointments
