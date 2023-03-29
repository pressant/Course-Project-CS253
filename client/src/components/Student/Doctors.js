import styles from "./Doctors.module.css"
import React,{useEffect} from "react";
// import axios from 'axios';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


export default function Doctors() {
	const axiosPrivate = useAxiosPrivate();
	let doctor_list = [];
	var idx = 0;
	
	const rrr = () => {
		axiosPrivate.get('/schedule').then((res)=>{
			doctor_list = res.data;
            console.log(doctor_list);
			console.log(typeof(doctor_list) === Array);
		})
	}

	useEffect(() => {
		document.onload = rrr();
		// eslint-disable-next-line
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
			<div className={`container ${styles.doctors}`}>
				<div className="row">
					<div className="col">#</div>
					<div className="col">Doctor Name</div>
					<div className="col">Slot</div>
					<div className="col">Specialization</div>
					<div className="col">Room No.</div>
				</div>
				{doctor_list.map((element) => {
						idx++;
						return (
							<div className="row">
								<div className="col">{idx}</div>
								<div className="col">{element.name_of_medicine}</div>
								<div className="col">{element.dosage}</div>
								<div className="col">{element.specialization}</div>
								<div className="col">{element.Room_no}</div>
							</div>
						);
					})
				}
			</div>	
        </div>
	);
}