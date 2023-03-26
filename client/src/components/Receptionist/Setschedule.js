import React,{useState} from 'react'
import axios from 'axios'
import {useHistory } from 'react-router-dom'

const DoctorAppointment = (props) => {

    const history = useHistory();
    const [medicine, setMedicine] = useState([]);

	const handlePrescribe=()=>{
		axios.post("http://localhost:9002/doctor_schedule", medicine)
            .then( res => {
                alert(res.data.message)
                history.push("/receptionist")
            })
			.catch((err)=>{
				console.log(err);
			})
	}
    
    const handleClick = () => {
        var name = document.getElementById('name').value;
        var dosage = document.getElementsByName('btnradio');
		var specialization=document.getElementById('specialization').value;
		var room=document.getElementById('room').value;
        var dose;
		for(var i = 0; i < dosage.length; i++)
        {
            if(dosage[i].checked)
            {
                dose = dosage[i].value;
                dosage[i].checked = false;
                break;
            }
        }
        setMedicine([...medicine, {name_of_medicine: name, dosage: dose , specialization:specialization,Room_no:room}]);
        document.getElementById('name').value = "";
		document.getElementById('specialization').value = "";
		document.getElementById('room').value = "";
    }

    return (
        <div className="col-7 text-center">
            <h2 className="mb-5">Doctor Allotment for the day</h2>
            <div className="container my-3">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Doctor Name</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="name"/>
                </div>
            </div>
            <div className="btn-group my-3" role="group" aria-label="Basic radio toggle button group">  
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" value="Morning"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Morning</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" value="Evening"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Evening</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" value="Both"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio3">Both</label>
            </div>
			<div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Doctor specialization</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="specialization"/>
                </div>

				<div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Room No.</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="room"/>
                </div>	

		     <div className='container'>

                <button className="btn btn-dark my-3" onClick={handleClick}>Add Doctor</button>
			  </div>
            <div className="row my-3">
                <div className="col-6">
                    <h4>Current Doctors</h4>
                </div>
                <div className="col-6">
                    {
                        medicine?.map((element) => {
                            return(
                                <div className="row mx-3">
                                    {element.name_of_medicine}: Slot {element.dosage}
                                </div>
                            );
                        })
                    }
                </div>
            </div>


            <div className="container mt-5">
                <button className="btn btn-lg btn-dark" onClick={handlePrescribe}>
                    Add doctors for the day
                </button>
            </div>
        </div>
    );
}

export default DoctorAppointment;
