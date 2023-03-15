import "./Home.css"
import React from "react";
import {Link} from "react-router-dom";

export default function Home(props) {
	return (
		<>
		<Link to="student/request"><button>Request Appointment</button></Link>
		<Link to="student/upcoming"><button>View Upcoming Appointments</button></Link>
		<Link to="student/history"><button>View Medical History</button></Link>
		<Link to="student/doctors"><button>View Doctor Schedules</button></Link>
		<h1>Hello</h1>
		</>
	)
}