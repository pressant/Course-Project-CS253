import React,{useEffect} from 'react'
import Appointment from './Appointment'
import axios from 'axios';

let app_t_arr=[]

const AppointmentsRequests = (props) => {

    const prescriptions = props.prescriptions;
    useEffect(() => {
        document.onload = rrr();
        console.log(app_t_arr);
    })

    const rrr = () =>{
        axios.get('http://localhost:9002/upcoming_student') 
        .then(res => {
            app_t_arr.push(res.data.request);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
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
             {/* render below section from the data uploaded from the array appt_array that contains all the info*/}

                <div className="container"> 
                    <div className="row">
                        {prescriptions?.map((element) => {
                            return (
                                <div className="col-md-4" key={element.id}>
                                    <Appointment prescription={element}/>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default AppointmentsRequests
