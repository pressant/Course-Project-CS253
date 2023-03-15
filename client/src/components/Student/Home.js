import React from "react";
import {Link} from "react-router-dom";

export default function Home(props) {
	return (
		<div>
		<Link to="student/request"><button>Request Appointment</button></Link>
		<Link to="student/upcoming"><button>View Upcoming Appointments</button></Link>
		<Link to="student/history"><button>View Medical History</button></Link>
		<Link to="student/doctors"><button>View Doctor Schedules</button></Link>
		</div>
	)
}