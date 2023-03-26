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
    var k=0;
   if(global[1]==='doctor'){ 
    k=1;
   }
   if(k===0){
    history.push("/login")
   }
    return (
        <>
            <div className="Entry_page">
                <h1>Doctor Entry page</h1>
                <button className="home_button" onClick={schedule}>Schedule</button>
                <br/>
                <button className="home_button" onClick={appointments}>Veiw Appointments</button>
            </div>
        </>
    );
}

export default Entry_page
