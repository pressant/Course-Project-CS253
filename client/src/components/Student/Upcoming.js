import "./Upcoming.css"
import React,{useState,useEffect} from "react";
import axios from "axios";
import Appointment from "../Receptionist/Appointment";
// import {Link} from "react-router-dom";

export default function Upcoming(props) {

	useEffect(() => {
        document.onload = rrr();
    },[])
	const [app_t_arr, setAppts] = useState([])
	const rrr = () =>{
        axios.get('http://localhost:9002/upcoming_student') 
        .then(res => {
            setAppts(res.data.request);
            console.log(res.data.request);
        })
        .catch(err => {
            console.log(err);
        })
    }

	return (
		<div className="student_upcoming">
			<div className="container"> 
                    <div className="row">
						{app_t_arr.map((el) =>  {
							return (
						<div className="col-md-4" key={app_t_arr.indexOf(el)}> 
							<Appointment prescription={{
								id: app_t_arr.indexOf(el),
								name: el.name,
								description:el.symptoms,
								doctor:el.preferredDoctor
							}} />
						</div>);
						})
						}
                    </div>
                </div>
		</div>
	)
}