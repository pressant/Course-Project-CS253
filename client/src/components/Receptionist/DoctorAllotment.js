import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import $ from 'jquery'
import axios from 'axios'
const doctors = ["Dr. A", "Dr. B", "Dr. C","Dr. D","Dr. E","Dr. F"];

const DoctorAllotment = () => {
    const [doctor,setDoctor]=useState("Dr. A")
    const location = useLocation();
    const state = location.state;

    const handleClick = () => {
        // document.getElementById("doc-allot").innerHTML = item.innerHTML;
        var doc = $(this).text();
        document.getElementById("doc-allot").innerHTML = doc;
    }
    const handleChange2=(e)=>{
		setDoctor(e.target.value);
	}	
    const arr=[state.name,state.id,state.description,state.preferredDoctor,state.slot,doctor]
    const submited=(e)=>{
        
    }

    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-4">Name: {state.name}</div>
                <div className="col-4 text-center">Roll/PF Number: {state.id}</div>
            </div>
            <div className="row text-center my-5">
                <h2>Description</h2>
            </div>
            <span className="d-block p-2 bg-dark text-white text-center">{state.description}</span>
            <div className="row justify-content-between my-5">
                <div className="col-4">Preferred Doctor: {state.preferredDoctor}</div>
                <div className="col-4">Preferred Slot: {state.slot}</div>
            </div>
            <div class="row justify-content-between">
                <div class="col-6">
                    {/* <div class="btn-group mx-5 justify-content-center">
                        <button class="btn btn-secondary btn-lg" type="button" id="doc-allot">
                            Assign Doctor
                        </button>
                        <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <button className="dropdown-item" onClick={handleClick} id="list-docs">Dr. A</button>
                            <button className="dropdown-item" onClick={handleClick} id="list-docs">Dr. B</button>
                            <button className="dropdown-item" onClick={handleClick} id="list-docs">Dr. C</button>
                        </ul>
                    </div> */}
                    <div id="appt_doctor">
				{doctors.map((doctor) => (
					<>
						<input type="radio" id={doctor} name="appt_doctor" value={doctor} onChange={handleChange2}  />
						<label for={doctor}>{doctor}</label>
					</>
				))}
			</div>
                </div>
                <div class="col-4">
                    <button type="button" class="btn btn-secondary btn-lg col-md-8" onClick={submited}>Approve Appointment Request</button>
                </div>
            </div>
        </div>
    );
}

export default DoctorAllotment
