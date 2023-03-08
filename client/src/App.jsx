import React from "react"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import { Route, Routes,BrowserRouter } from "react-router-dom"
import Login from "./components/Login"
import InitialNurse from "./components/Nurse/InitialNurse"
import Vitals from "./components/Nurse/Vitals"
import InitialPharmacy from "./components/Pharmacy/InitialPharmacy"
import Prescription from "./components/Pharmacy/Prescription"
import CompletedPrescription from "./components/Pharmacy/CompletedPrescription"

const App=()=>{

    let medicine = [
        {
            id: 615,
            name: "sdgre",
            dose: "asf"
        },
        {
            id: 541,
            name: "erdsf",
            dose: "tgfwdf"
        },
        {
            id: 128,
            name: "resgdvre",
            dose: "resdgf"
        }
    ];

    let patients = [
        {
            id: 651,
            prescriptionId: 542151
        },
        {
            id: 541,
            prescriptionId: 842851
        },
        {
            id: 321,
            prescriptionId: 987421
        }
    ];

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/signup"  element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/nurse/" element={<InitialNurse/>}/>
                <Route path="/nurse/vitals" element={<Vitals name="ABCD" id={420}/>}/>
                <Route path="/pharmacy/" element={<InitialPharmacy/>}/>
                <Route path="/pharmacy/prescription" element={<Prescription name="abcd" id={1234} prescriptionId={1651} medicine={medicine}/>}/>
                <Route path="/pharmacy/completedprescription" element={<CompletedPrescription patients={patients}/>}/>
            </Routes>
        </BrowserRouter>
            
    )
}

export default App