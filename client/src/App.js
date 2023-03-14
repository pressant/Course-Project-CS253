import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
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
import CompletedPrescription from "./components/Pharmacy/CompletedPrescription"
import Navbar from './components/Navbar';
import StudentHome from "./components/Student/Home";
import StudentRequest from "./components/Student/Request";
import StudentUpcoming from "./components/Student/Upcoming";
import StudentHistory from "./components/Student/History";
import StudentDoctors from "./components/Student/Doctors";
import InitialReceptionist from './components/Receptionist/InitialReceptionist';
import AppointmentsRequests from './components/Receptionist/AppointmentsRequests';
import DoctorAllotment from './components/Pharmacy/DoctorAllotment';

function App() {

  const [ user, setLoginUser] = useState({identity:"doctor"})

  // eslint-disable-next-line
  const [prescriptions, setPrescriptions] = useState([
    {
      name: "a",
      id: 1,
      prescriptionId: 100,
      description: "asdfas a sd asdhaj shdfaj s",
      medicines: [
        {
          id: 1,
          name: "Paracetamol",
          dose: "asdon f asdf"
        },
        {
          id: 2,
          name: "Soframycin",
          dose: "ka sjdg nj"
        },
        {
          id: 3,
          name: "Morphine",
          dose: "nsfn jndvjen f"
        },
        {
          id: 4,
          name: "Erythromycin",
          dose: "sadn sd fj sasd f"
        }
      ]
    },
    {
      name: "b",
      id: 2,
      prescriptionId: 200,
      description: "dfhg dgfdg fg e adva",
      medicines: [
        {
          id: 1,
          name: "Paracetamol",
          dose: "asdon f asdf"
        },
        {
          id: 2,
          name: "Soframycin",
          dose: "ka sjdg nj"
        }
      ]
    },
    {
      name: "c",
      id: 3,
      prescriptionId: 300,
      description: "erh rfd hbtdf ghbdfh sdfasf",
      medicines: [
        {
          id: 1,
          name: "Paracetamol",
          dose: "asdon f asdf"
        },
        {
          id: 2,
          name: "Soframycin",
          dose: "ka sjdg nj"
        },
        {
          id: 3,
          name: "Morphine",
          dose: "nsfn jndvjen f"
        }
      ]
    }
  ]);

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
          <Route exact path="/pharmacy/"><InitialPharmacy prescriptions={prescriptions}/></Route>
          <Route exact path="/pharmacy/prescription"><Prescription/></Route>
          <Route exact path="/pharmacy/completedprescription"><CompletedPrescription prescriptions={prescriptions}/></Route>
          <Route exact path="/student/"><StudentHome /></Route>
          <Route exact path="/student/request"><StudentRequest /></Route>
          <Route exact path="/student/upcoming"><StudentUpcoming /></Route>
          <Route exact path="/student/history"><StudentHistory /></Route>
          <Route exact path="/student/doctors"><StudentDoctors /></Route>
          <Route exact path="/receptionist/"><InitialReceptionist/></Route>
          <Route exact path="/receptionist/appointments"><AppointmentsRequests prescriptions={prescriptions}/></Route>
          <Route exact path="/receptionist/doctorallotment"><DoctorAllotment/></Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
