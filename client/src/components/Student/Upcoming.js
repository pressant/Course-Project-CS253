import "./Upcoming.css"
import React,{useState,useEffect} from "react";
import axios from "axios";
import Appointment from "../Receptionist/Appointment";
import {global} from "../login/login";
// import {Link} from "react-router-dom";

export default function Upcoming(props) {
    let a=0;
	useEffect(() => {
        document.onload = rrr1();
    })
	const [app_t_arr, setAppts] = useState([])
  
    const rrr1 = () => {
		axios.get("http://localhost:5000/new"+global.roll)
			.then((res) => {
				console.log(res.data.request);
				setAppts(res.data.request);
			})
			.catch((err) => {
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