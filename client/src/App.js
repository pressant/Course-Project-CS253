import './App.css'
import Homepage from "./components/homepage/homepage"
import {Login,global} from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" ;
import { useState } from 'react';
import Doctor from './components/doctor/Entry_page';
import Schedule from './components/doctor/Schedule';
import Veiwappointments from './components/doctor/Veiw Appointments/veiw_appointments';
import InitialNurse from "./components/Nurse/InitialNurse"
import Vitals from "./components/Nurse/Vitals"
import InitialPharmacy from "./components/Pharmacy/InitialPharmacy"
import Prescription from "./components/Pharmacy/Prescription"
// import CompletedPrescription from "./components/Pharmacy/CompletedPrescription"
import Navbar from './components/Navbar';
import StudentHome from "./components/Student/Home";
import StudentRequest from "./components/Student/Request";
import StudentUpcoming from "./components/Student/Upcoming";
import StudentHistory from "./components/Student/History";
import StudentDoctors from "./components/Student/Doctors";
import InitialReceptionist from './components/Receptionist/InitialReceptionist';
import AppointmentsRequests from './components/Receptionist/AppointmentsRequests';
import DoctorAllotment from './components/Receptionist/DoctorAllotment';
import Notfound from './Notfound';
import Conductappointment from './components/doctor/Veiw Appointments/Conduct_appointment';

import DoctorAppointments from './components/Receptionist/Setschedule';

import UploadReports from './components/Receptionist/UploadReports';
import AppointmentStatus from './components/Receptionist/AppointmentStatus';

function App() {

  const [ user, setLoginUser ] = useState({identity:"doctor"})

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login"><Login setLoginUser={setLoginUser}/></Route>
          <Route path="/register"><Register /></Route>
          <Route exact path="/doctor"><Doctor/></Route>
          <Route exact path="/doctor/schedule"><Schedule/></Route>
          <Route exact path="/doctor/view_appointment"><Veiwappointments/></Route>
          <Route exact path="/nurse/"><InitialNurse name="abcd" id={420}/></Route>
          <Route exact path="/nurse/vitals"><Vitals/></Route>
          <Route exact path="/pharmacy/"><InitialPharmacy/></Route>
          <Route exact path="/pharmacy/prescription"><Prescription/></Route>
          {/* <Route exact path="/pharmacy/completedprescription"><CompletedPrescription/></Route> */}
          <Route exact path="/student"> <StudentHome /></Route>
          <Route exact path="/student/request"><StudentRequest /></Route>
          <Route exact path="/student/upcoming"><StudentUpcoming /></Route>
          <Route exact path="/student/history"><StudentHistory /></Route>
          <Route exact path="/student/doctors"><StudentDoctors /></Route>
          <Route exact path="/receptionist/"><InitialReceptionist/></Route>
          <Route exact path="/receptionist/"><InitialReceptionist/></Route>
          <Route exact path="/receptionist/appointments"><AppointmentsRequests/></Route>
          <Route exact path="/receptionist/appointmentstatus"><AppointmentStatus/></Route>
          <Route exact path="/receptionist/appointments"><AppointmentsRequests/></Route>
          <Route exact path="/receptionist/appointmentstatus"><AppointmentStatus/></Route>
          <Route exact path="/receptionist/doctorallotment"><DoctorAllotment/></Route>
          <Route exact path="/doctor/conduct_appointment"> <Conductappointment/> </Route>
          <Route exact path="/receptionist/setschedule"><DoctorAppointments/></Route>
          <Route exact path="/receptionist/uploadreports"><UploadReports/></Route>
          <Route path='*' ><Notfound/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
