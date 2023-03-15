import "./Upcoming.css"
import React from "react";
import axios from "axios";
// import {Link} from "react-router-dom";

export default function Upcoming(props) {
	const rrr = () =>{
    axios.get('http://localhost:9002/upcoming_student') 
    .then(res => {
		console.log(res.data.request);
	})
	.catch(err => {
		console.log(err);
	})
}

	return (
		<div className="student_upcoming">
			
		</div>
	)
}