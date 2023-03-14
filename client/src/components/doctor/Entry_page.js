import React from 'react'
import {useHistory} from 'react-router-dom';

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
        <div>
        <h1>Doctor Entry page</h1>
        <button onClick={schedule} >Schedule</button>
        <br/>
        <button onClick={appointments}>Veiw Appointments</button>
        </div>
    );
}

export default Entry_page
