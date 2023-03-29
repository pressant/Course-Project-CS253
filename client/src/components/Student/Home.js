import "./Home.css"
import React from "react";
import {Link} from "react-router-dom";

export default function Home(props) {
	return (
		<div className="student_home">
			<table>
			<tbody>
				<tr>
					<td><Link to="request"><button>Request Appointment</button></Link></td>
					<td><Link to="upcoming"><button>View Appointments</button></Link></td>
				</tr>
				<tr>
					<td><Link to="history"><button>View Medical History</button></Link></td>
					<td><Link to="doctors"><button>View Doctor Schedules</button></Link></td>
				</tr>
			</tbody>
			</table>
		</div>
	)
}