import "./doctors.css";
import React,{useEffect} from "react";
import axios from 'axios';


export default function Doctors() {
	
	let doctor_list= new Array();
	var idx = 0;
	
	const rrr = () => {
		axios.get('http://localhost:9002/schedule').then((res)=>{
			doctor_list = res.data;
            console.log(doctor_list);
			console.log(typeof(doctor_list) === Array);
		})
	}

	useEffect(() => {
		document.onload = rrr();
	},[]);

	return (
		<div className="container mt-5">
            <div className="row justify-content-between">
                <div className="col-6">
                    <h2>Doctors Schedule</h2>
                </div>
                <div className="col-5">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="number" placeholder="Roll/PF Number" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <table className="table table-bordered mt-5">
                <thead className="table-dark">
                    <tr>
                        <th className="text-center" scope="col">#</th>
                        <th className="text-center" scope="col">Doctor Name</th>
                        <th className="text-center" scope="col">Slot</th>
                        <th className="text-center" scope="col">Specialization</th>
                        <th className="text-center" scope="col">Room No.</th>
                    </tr>
                </thead>
                <tbody>
                    {doctor_list?.map((element) => {
                        idx++;
                        return(
							<tr key={idx}>
								<td scope="row">{idx}</td>
								<td>{element.name_of_medicine}</td>
								<td>{element.dosage}</td>
								<td>{element.specialization}</td>
								<td>{element.Room_no}</td>
							</tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
	);
}