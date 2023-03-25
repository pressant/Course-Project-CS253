import "./Home.css"
import React from "react";
import {Link,useHistory} from "react-router-dom";
import { global } from "../login/login";

export default function Home(props) {
	const history= useHistory();
	var k=0;
   if(global[1]==='student'){
    k=1;
   }
   if(k===0){
    history.push("/login")
   }
	return (
		<div className="student_home">
			<table>
				<tr>
					<td><Link to="student/request"><button className="home_button">Request Appointment</button></Link></td>
					<td><Link to="student/upcoming"><button className="home_button">View Upcoming Appointments</button></Link></td>
				</tr>
				<tr>
					<td><Link to="student/history"><button className="home_button">View Medical History</button></Link></td>
					<td><Link to="student/doctors"><button className="home_button">View Doctor Schedules</button></Link></td>
				</tr>
			</table>
		</div>
	)
}