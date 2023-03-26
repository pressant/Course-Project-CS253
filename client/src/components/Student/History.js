import "./History.css"
import React from "react";
import { useEffect,useState } from "react";
import {global} from "../login/login";
import axios from "axios";
// import {Link} from "react-router-dom";

export default function History(props) {
	const [hist, setHistory] = useState([]);
    useEffect(() => {
		document.onload=getHistory();
	});
     var a=global[2];
	const getHistory = () => {
        axios.get("http://localhost:9002/student_history"+a).then((res) => {
			console.log(res.data.request);
			setHistory(res.data.request);
		}).catch((err) => {
			console.log(err);
		})
	}

	return (
		<div className="col-7 mx-1" style={{ maxHeight: '600px', overflowY: 'scroll' }}>
		{hist?.map((element) => (
			<div key={element.index}>
				<div className="card my-3 mx-3 btn btn-light" key={element.index} onClick={() => {
				}}>
					<div className="card-header text-center">{element.date}</div>
					<div className="card-body">
						<h5 className="card-title">{element.date}</h5>
						<div className="card-text">{
							element.medication?.map((med) => (
								<div key={med.index}>
									<div>{med.name_of_medicine}</div>
									<div>{med.days}</div>
									<div>{med.dosage}</div>
								</div>
							))
						}</div>
					</div>
					
				</div>
			</div>
		))}
	</div>
	)
}