
import React,{useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./request.css"
import { global } from "../login/login";

export default function Request(props) {
	const history = useHistory()
	const [appy_type,setappytype]=useState("OPD");
    const [appt_slot,setapptslot]=useState("Morning");
    const [doctor,setDoctor]=useState("Dr. A")

	const doctors = ["Dr. A", "Dr. B", "Dr. C","Dr. D","Dr. E","Dr. E"];
    const [symptoms,updateSymptoms] = useState("")
	let name=global[0];
	let roll=global[2];
	const Request=[name,roll,appy_type,appt_slot,symptoms,doctor];
    let role=global[1];


    const requested=()=>{

		const {name,roll,appy_type,appt_slot,symptoms,doctor}=Request;
		console.log(Request);
        if(name!=="" && roll!=="" && appy_type!=="" && appt_slot!=="" && symptoms!=="" && doctor!==""){
			console.log(name);
			axios.post("http://localhost:9002/request_student", Request)
			.then( res => {
				alert(res.data.message)
				history.push("/student")
			})
		}
		else{
			alert("Please fill all the fields")
		}
	}
    const handleChange=(e)=>{
		setappytype(e.target.value);
    }
	const habdleChange=(e)=>{
		setapptslot(e.target.value);
	}
    const handleChange2=(e)=>{
		setDoctor(e.target.value);
	}	
	return (
		<>
		if(role!=="student"){
			history.push("/login")
		}
		<div className="student_request">
			<h2>Request an appointment</h2>
			<div id="appt_type">
				<input type="radio" id="opd" name="appt_type" value="OPD" onChange={handleChange}/>
				<label for="opd">OPD</label>
				<input type="radio" id="specialist" name="appt_type" value="Specialist" onChange={handleChange}  />
				<label for="specialist">Specialist</label>
			</div>
			<div id="appt_slot">
				<input type="radio" id="morning" name="appt_slot" value="Morning" onChange={habdleChange} />
				<label for="morning">Morning</label>
				<input type="radio" id="evening" name="appt_slot" value="Evening" onChange={habdleChange} />
				<label for="evening">Evening</label>
			</div>
			<div id="appt_doctor">
				{doctors.map((doctor) => (
					<>
						<input type="radio" id={doctor} name="appt_doctor" value={doctor} onChange={handleChange2}  />
						<label for={doctor}>{doctor}</label>
					</>
				))}
			</div>
			<div id="appt_symptoms">
				<input type="text" id="symptoms" name="symptoms" value={symptoms} onChange={e=>{updateSymptoms(e.target.value)}} placeholder="Symptoms"/>
			</div>
			<button onClick={requested}>Request</button>
		</div>
		</>
	);
}