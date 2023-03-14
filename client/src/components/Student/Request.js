import React from "react";
// import {Link} from "react-router-dom";


export default function Request(props) {

	const doctors = ["Dr. A", "Dr. B", "Dr. C"];

	return (
		<div className="">
			<h2>Request an appointment</h2>
			<div id="appt_type">
				<input type="radio" id="opd" name="appt_type" value="OPD" checked/>
				<label for="opd">OPD</label>
				<input type="radio" id="specialist" name="appt_type" value="Specialist" />
				<label for="specialist">Specialist</label>
			</div>
			<div id="appt_slot">
				<input type="radio" id="morning" name="appt_slot" value="Morning" />
				<label for="morning">Morning</label>
				<input type="radio" id="evening" name="appt_slot" value="Evening" />
				<label for="evening">Evening</label>
			</div>
			<div id="appt_doctor">
				{doctors.map((doctor) => (
					<>
						<input type="radio" id={doctor} name="appt_doctor" value={doctor} />
						<label for={doctor}>{doctor}</label>
					</>
				))}
			</div>
			<div id="appt_symptoms">
				<input type="text" id="symptoms" name="symptoms" />
			</div>
			<button>Request</button>
		</div>
	);
}