import React, { useState } from 'react'
import Medication from './Medication';
import DiagnosticTest from './DiagnosticTest';
import MedHistory from './MedHistory';
import { useLocation,useNavigate } from "react-router-dom";

const Conduct_appointment = () => {
    const navigate = useNavigate();
    const [view, setView] = useState("med");
    const { state } = useLocation();

    const handleClick = (event) => {
        setView(event.target.id);
    }
    const handleClick2 = (event) => {
        
        navigate("/doctor/appointments");
    }

    return (
        <div className="container row d-flex align-items-center">
            <div className="col-4 mx-4" role="group" aria-label="Vertical button group">
                <button type="button" id="med" className="btn btn-dark col-12 my-5" style={{height: "100px"}} onClick={handleClick}>Prescribe Medication</button>
                <button type="button" id="hist" className="btn btn-dark col-12 my-5" style={{height: "100px"}} onClick={handleClick}>Medical History</button>
                <button type="button" id="test" className="btn btn-dark col-12 my-5" style={{height: "100px"}} onClick={handleClick}>Diagnostic Tests</button>
            </div>
            {console.log(state.doctor)}
            {view === 'med' && <Medication doctor={state.doctor} slot={state.slot} rollno={state.id}/>}
            {view === 'hist' && <MedHistory rollno={state.id}/>}
            {view === 'test' && <DiagnosticTest/>}


            <div className='cotainer'><button type="button" id="unknown" className="btn btn-dark col-12 my-5" style={{height: "100px"}} onClick={handleClick2}>Complete Appointment</button></div>
        </div>

    );
}


export default Conduct_appointment;
