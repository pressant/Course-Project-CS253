import "./Upcoming.css"
import React,{useState,useEffect} from "react";
import axios from "axios";
import {global} from "../login/login";

export default function Upcoming(props) {
	useEffect(() => {
        document.onload = rrr1();
    })
	const [app_t_arr, setAppts] = useState([])
    const rrr1 = () => {
		axios.get("http://localhost:9002/new"+global[2]).then((res) => {
			setAppts(res.data.request);
		}).catch((err) => {
			console.log(err);})
		}
	return (
		<div className="student_upcoming">
			<div className="container"> 
                    <div className="row">
						{app_t_arr.map((el) =>  {
							return (
								<div className="my-3">
									<div className="card my-3 hc_card">
										<div className="card-header hc_card_header"><h4>{el.rollno}</h4></div>
										<div className="card-body hc_card_body">
											<h5 className="card-title hc_card_title">{el.name}</h5>
											<p className="card-text hc_card_text">{el.symptoms}</p>
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