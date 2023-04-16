import React, { useState } from 'react'
import Medication from './Medication';
import DiagnosticTest from './DiagnosticTest';
import MedHistory from './MedHistory';
import { useLocation,useNavigate } from "react-router-dom";
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

const Conduct_appointment = () => {

    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const [view, setView] = useState("med");
    const [appt, setAppt] = useState([]);
    
    const { state } = useLocation();
    
    const handlePrescription = (pres) => {
        setAppt([...appt, pres]);
        console.log(appt);
    }

    const handleClick = (event) => {
        setView(event.target.id);
    }
    const handleClick2 = (event) => {
        axiosPrivate.post('/complete_appt', appt).then((res) => {
            console.log(res);
            alert(res.data.message);
            navigate("/doctor/view_appointment");
            // navigate('/doctor_appt');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="container row d-flex align-items-center">
            <div className="col-4 mx-4" role="group" aria-label="Vertical button group">
                <button type="button" id="med" className="btn btn-dark col-12 my-5" style={{height: "100px"}} onClick={handleClick}>Prescribe Medication</button>
                <button type="button" id="hist" className="btn btn-dark col-12 my-5" style={{height: "100px"}} onClick={handleClick}>Medical History</button>
                <button type="button" id="test" className="btn btn-dark col-12 my-5" style={{height: "100px"}} onClick={handleClick}>Diagnostic Tests</button>
            </div>
            {console.log(state.doctor)}
            {view === 'med' && <Medication onPrecriptionAdd={handlePrescription} doctor={state.doctor} slot={state.slot} rollno={state.id}/>}
            {view === 'hist' && <MedHistory rollno={state.id}/>}
            {view === 'test' && <DiagnosticTest onPrecriptionAdd={handlePrescription} doctor={state.doctor} slot={state.slot} rollno={state.id}/>}
            <div className='container d-flex justify-content-center'>
                <button type="button" id="unknown" className="btn btn-dark col-6 my-5" style={{height: "100px"}} onClick={handleClick2}>Complete Appointment</button>
            </div>
        </div>

    );
}


export default Conduct_appointment;
