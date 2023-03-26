import "./view_appointments.css"
import React,{useState,useEffect} from 'react'
import axios from "axios"
import Appointment from './Appointment'
import useAuth from "../../../hooks/useAuth"


const Veiw_appointments = () => {

    const [app_t_arr, setAppts] = useState([]);
    const {auth} = useAuth();

    useEffect(() => {
        document.onload = abcd();
    })

    const abcd=()=>{
        axios.get("http://localhost:9002/doctor"+auth.user.rollno).then((res) => {
        setAppts(res.data.request);
        }).catch((err) => {
        console.log(err);});
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-between">
                <div className="col-6">
                    <h2>Appointment Requests</h2>
                </div>
                <div className="col-5">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="number" placeholder="Roll/PF Number" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="container"> 
                <div className="row">
                    {app_t_arr.map((el) =>  {
                        return(
                        <div className="col-md-4" key={app_t_arr.indexOf(el)}> 
                            <Appointment prescription={{
                                name :el.name ,
                                id :el.rollno,
                                description :el.symptoms,
                                doctor: el.Doctor,
                                slot: el.appt_slot
                            }} />
                        </div>);
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default Veiw_appointments