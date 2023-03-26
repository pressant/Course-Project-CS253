import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const doctors = ["Dr. A", "Dr. B", "Dr. C","Dr. D","Dr. E","Dr. F"];

const DoctorAllotment = (props) => {
    const [doctor,setDoctor]=useState("Dr. A")
    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();


    const handleChange2=(e)=>{
		setDoctor(e.target.value);
	}	
    console.log(state.slot,state.preferredDoctor);

    const arr=[state.name,state.id,state.description,state.slot,doctor,state.preferredDoctor]
    const submited=(e)=>{
        if( doctor!==""){
            axios.post("http://localhost:9002/submitted", arr)
            .then( res => {
                alert(res.data.message)
                navigate("/receptionist/appointments")
            })
        } else {
            alert("invlid input")
        }
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
            <div className="row justify-content-between">
                <div className="col-6">
                    {/* <div className="btn-group mx-5 justify-content-center">
                        <button className="btn btn-secondary btn-lg" type="button" id="doc-allot">
                            Assign Doctor
                        </button>
                        <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu">
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
                <div className="col-4">
                    <button type="button" className="btn btn-secondary btn-lg col-md-8" onClick={submited}>Approve Appointment Request</button>
                </div>
            </div>
        </div>
    );
}

export default DoctorAllotment
