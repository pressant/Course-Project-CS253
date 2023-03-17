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
		<>
		<Link to="student/request"><button>Request Appointment</button></Link>
		<br/>
		<Link to="student/upcoming"><button>View Upcoming Appointments</button></Link>
		<Link to="student/history"><button>View Medical History</button></Link>
		<Link to="student/doctors"><button>View Doctor Schedules</button></Link>
		</>
	)
}