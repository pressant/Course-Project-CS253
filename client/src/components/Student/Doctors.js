import "./doctors.css"
import React from "react";
import {Link,useHistory} from "react-router-dom";

export default function Doctors() {
   const history=useHistory();
	const doctors = [{name:"Dr. A", specialization:"ABCD", room:"A123", time:"12 pm - 5 pm"}, {name:"Dr. B", specialization:"BCDE", room:"A234", time:"1 pm - 5 pm"}];


	return (
		<>
		if(global.role !== "student"){
						history.push("/login")
		}			
		<div className="student_doctors">
			<h2>Doctors available today:</h2>
			{doctors.map((doctor) => (
				<div>
					{Object.keys(doctor).map((key) => (<span><strong>{key[0].toUpperCase() + key.slice(1, key.length).toLowerCase() + ":"}</strong> {doctor[key]} </span>))}
				</div>
			))}
		</div>
		</>
	)
}