import "./Upcoming.css"
import React,{useState,useEffect} from "react";
import axios from "axios";
import {global} from "../login/login";

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
								<div className="my-3">
									<div className="card my-3">
										<div className="card-header">{el.rollno}</div>
										<div className="card-body">
											<h5 className="card-title">{el.name}</h5>
											<p className="card-text">{el.symptoms}</p>
										</div>
									</div>
								</div>
							);
						})}
                    </div>
                </div>
		</div>
	);
}