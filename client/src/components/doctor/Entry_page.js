import "./Entry_page.css"
import React from 'react'
import {useNavigate} from 'react-router-dom';
const Entry_page = () => {
    const navigate=useNavigate();
    const schedule=()=>{
        console.log("Schedule called");
        navigate('/doctor/schedule');
    }
    const appointments=()=>{
        navigate('/doctor/view_appointment');
    }

    return (
        <>
        <div className="Entry_page">
        <h1>Doctor Entry page</h1>
        <button onClick={schedule} >Schedule</button>
        <br/>
        <button onClick={appointments}>Veiw Appointments</button>
        </div>
        </>
    );
}

export default Entry_page
