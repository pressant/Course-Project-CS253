import "./Entry_page.css"
import React from 'react'
import {useHistory} from 'react-router-dom';
import { global } from "../login/login";
const Entry_page = () => {
    const history=useHistory();
    const schedule=()=>{
        console.log("Schedule called");
        history.push('/doctor/schedule');
    }
    const appointments=()=>{
        history.push('/doctor/view_appointment');
    }
    return (
        <>
        if(global[1]!=='doctor'){
            history.push("/login")
        }
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
