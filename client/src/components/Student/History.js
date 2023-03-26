import "./History.css"
import React from "react";
import { useEffect,useState } from "react";
import {global} from "../login/login";
import axios from "axios";
// import {Link} from "react-router-dom";

export default function History(props) {
	const [history, setHistory] = useState([]);
    useEffect(() => {
		document.onload=getHistory();
	}, []);
     var a=global[2];
	const getHistory = () => {
        axios.get("http://localhost:9002/student_history"+a).then((res) => {
			console.log(res.data.request[0].medication);
		}).catch((err) => {
			console.log(err);
		})
	}

	return (
		<div className="student_history">
		<h2>Your medical history:{history}</h2>
		<h2>{history}</h2>
		</div>
	)
}