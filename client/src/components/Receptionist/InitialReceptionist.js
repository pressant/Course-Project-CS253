import React from 'react'
import { useHistory } from 'react-router-dom'
import { global } from '../login/login';

const InitialReceptionist = () => {

  const history = useHistory();

  const handleViewReq = () => {
    history.push('/receptionist/appointments');
  }
  const handleViewStat = () => {
    history.push('/receptionist/appointmentstatus');
  }
  const handleReports = () => {
    history.push('/receptionist/uploadreports');
  }
  const handleSchedule = () => {
    history.push('/receptionist/setschedule');
  }
  var k=0;
   if(global[1]==='receptionist'){
    k=1;
   }
   if(k===0){
    history.push("/login")
   }

  return (
    <>
    <div>
        <div className="row">
            <button type="button" onClick={handleViewReq} class="home_button btn btn-secondary btn-lg col-lg-4 my-3 mx-3">View Appointment Requests</button>
            <button type="button" onClick={handleViewStat} class="home_button btn btn-secondary btn-lg col-lg-4 my-3 mx-3">View Appointment Status</button>
        </div>
        <div className="row">
            <button type="button" onClick={handleReports} class="home_button btn btn-secondary btn-lg col-lg-4 my-3 mx-3">Upload Medical Reports</button>
            <button type="button" onClick={handleSchedule} class="home_button btn btn-secondary btn-lg col-lg-4 my-3 mx-3">Set Doctors Schedule</button>
        </div>
    </div>
    </>
  )
}

export default InitialReceptionist
