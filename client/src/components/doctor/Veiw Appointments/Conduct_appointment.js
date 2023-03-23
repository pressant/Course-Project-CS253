import React,{useState} from 'react'
import axios from 'axios'
import Medication from './Medication';
import DiagnosticTest from './DiagnosticTest';
import MedHistory from './MedHistory';

const Conduct_appointment = () => {

    const [view, setView] = useState("med");

    const handleClick = (event) => {
        setView(event.target.id);
    }

    return (
        <div className="container row d-flex align-items-center">
            <div className="col-4 mx-4" role="group" aria-label="Vertical button group">
                <button type="button" id="med" className="btn btn-dark col-12 my-5" style={{height: "100px"}} onClick={handleClick}>Prescribe Medication</button>
                <button type="button" id="hist" className="btn btn-dark col-12 my-5" style={{height: "100px"}} onClick={handleClick}>Medical History</button>
                <button type="button" id="test" className="btn btn-dark col-12 my-5" style={{height: "100px"}} onClick={handleClick}>Diagnostic Tests</button>
            </div>
            {view === 'med' && <Medication/>}
            {view === 'hist' && <MedHistory/>}
            {view === 'test' && <DiagnosticTest/>}
        </div>
    );
}


export default Conduct_appointment;
