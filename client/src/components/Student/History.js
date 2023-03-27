import "./History.css"
import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
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
	}, []);

	const getHistory = () => {
        axiosPrivate.get("/student_history"+auth.user.rollno).then((res) => {
			console.log(res);
			setHistory(res.data);
		}).catch((err) => {
			console.log(err);
			navigate("/login", {state : {from : location}, replace : true});
		})
	}

	return (
		<div className="student_history">
		<h2>Your medical history:</h2>
		<h2>{history}</h2>
		</div>
	)
}