
import React,{useState,useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./request.css"
import { global } from "../login/login";
let arr=[];
let doctors=[];
export default function Request(props) {
	const rrr=()=>{
		axios.get('http://localhost:9002/doctor_on_schedule', (req, res) => {
            arr=res.data;
		})
      let arr_length=arr.length;
	  for(let i=0;i<arr_length;i++){
		  doctors.push(arr[i].name_of_medicine);
	  }
	}
	useEffect(() => {
      document.onload = rrr();
	}, []);
	const history = useHistory()
	const [appy_type,setappytype]=useState("");
    const [appt_slot,setapptslot]=useState("");
    const [doctor,setDoctor]=useState("shrey")

    const [symptoms,updateSymptoms] = useState("")
	let name=global[0];
	let roll=global[2];
	const Request=[name,roll,appy_type,appt_slot,symptoms,doctor];
    let role=global[1];
	if(role!=="student"){
		history.push("/login")
	}
    const requested=()=>{
		const {name,roll,appy_type,appt_slot,symptoms,doctor}=Request;
		if(doctor==="shrey"){
			alert("Please select a doctor")
			return;
		}
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
	return (
		<>
		
		<div className="student_request col-6">
			<h2><center>Request an appointment</center></h2>
			<div className="card mx-auto my-4" style={{maxWidth: "18rem"}}>
			<div className="card-header">Appointment Type</div>
				<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
					<input type="radio" className="btn-check" name="btnradio1" id="opd" autocomplete="off"/>
					<label className="btn btn-outline-primary" for="opd">OPD</label>

					<input type="radio" className="btn-check" name="btnradio1" id="specialist" autocomplete="off"/>
					<label className="btn btn-outline-primary" for="specialist">Specialist</label>
				</div> 
			</div>
<div className="card mx-auto my-4" style={{maxWidth: "18rem"}}>
  <div className="card-header">Preferred Slot</div>
  <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
			<input type="radio" className="btn-check" name="btnradio2" id="morning" autocomplete="off"/>
			<label className="btn btn-outline-primary" for="morning">Morning</label>

			<input type="radio" className="btn-check" name="btnradio2" id="evening" autocomplete="off"/>
			<label className="btn btn-outline-primary" for="evening">Evening</label>
			</div> 
</div>
         <div class="text-center">
					<div className="btn-group-vertical my-4" role="group" aria-label="Vertical button group">
						<div className="btn-group" role="group">
							<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Preferred Doctor
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Dr. A</a></li>
								<li><a className="dropdown-item" href="#">Dr. B</a></li>
								<li><a className="dropdown-item" href="#">Dr. C</a></li>
								<li><a className="dropdown-item" href="#">Dr. D</a></li>
								<li><a className="dropdown-item" href="#">Dr. E</a></li>
								<li><a className="dropdown-item" href="#">Dr. F</a></li>
							</ul>
						</div>
					</div>
		 </div>

				
            <center>
			<div class="text-center" id="patient_symptoms">
				<textarea rows="3" input type="text" id="symptoms" name="symptoms" value={symptoms} onChange={e=>{updateSymptoms(e.target.value)}} placeholder="Symptoms"/>
			</div>
			</center>
			
			
			

			{/* <center>
			<button onClick={requested}>Request</button>
			</center> */}

			<div class="text-center">
			<button class="btn btn-primary" onClick={requested}>Request</button>
			</div>

		</div>
		</>
	);
}