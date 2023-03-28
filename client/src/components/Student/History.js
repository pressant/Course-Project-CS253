import "./History.css"
import React from "react";
import { useEffect,useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from 'react-router-dom';


export default function History(props) {
	const {auth} = useAuth();
	const [history, setHistory] = useState([]);
	const axiosPrivate = useAxiosPrivate();
	const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
		document.onload=getHistory();
        // eslint-disable-next-line
	}, []);

	const getHistory = () => {
        axiosPrivate.get("/student_history"+auth.user.rollno).then((res) => {
			console.log(res.data.request);
			setHistory(res.data.request);
		}).catch((err) => {
			console.log(err);
			navigate("/login", {state : {from : location}, replace : true});
		})
	}

	return (
		<div className="col-7 mx-1" style={{ maxHeight: '600px', overflowY: 'scroll' }}>
			{
				history?.map((element) => (
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