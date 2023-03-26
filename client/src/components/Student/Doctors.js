import "./doctors.css"
import React,{useEffect} from "react";
import {Link,useHistory} from "react-router-dom";
import axios from 'axios';
let doctor_list=[];
export default function Doctors() {
   const history=useHistory();
   const rrr=()=>{
		axios.get('http://localhost:9002/schedule').then((res)=>{
			   doctor_list.push(res.data)
			   console.log(doctor_list);
		})
	}
   useEffect(() => {
	document.onload = rrr();
},[])

	// const doctors = [{name:"Dr. A", specialization:"ABCD", room:"A123", time:"12 pm - 5 pm"}, {name:"Dr. B", specialization:"BCDE", room:"A234", time:"1 pm - 5 pm"}];


	return (
		<>
		<div className="student_doctors">
			<h2>Doctors available today:</h2>
			{doctor_list.map((doctor) => (
				<div>
					{Object.keys(doctor).map((key) => (<span><strong>{key[0].toUpperCase() + key.slice(1, key.length).toLowerCase() + ":"}</strong> {doctor[key]} </span>))}
				</div>
			))}
		</div>
		</>
	)
}