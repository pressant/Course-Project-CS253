import React from "react";
import {Link} from "react-router-dom";

export default function Home(props) {
	return (
		<div>
		<Link to="./request"><button>Request Appointment</button></Link>
		<Link to="./upcoming"><button>View Upcoming Appointments</button></Link>
		<Link to="./history"><button>View Medical History</button></Link>
		<Link to="./doctors"><button>View Doctor Schedules</button></Link>
		</div>
	)
}