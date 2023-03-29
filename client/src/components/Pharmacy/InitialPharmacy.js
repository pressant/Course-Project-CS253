import React, { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Patient from "./Patient";
// import { global } from "../login/login";
// import axios from "axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const InitialPharmacy = () => {

    // const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const [pending, setPending] = useState([]);
    
    const rrr = () =>{
        axiosPrivate.get('/pharmacist') 
        .then(res => {
            setPending(res.data);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        document.onload = rrr();
        // eslint-disable-next-line
    },[]);
    
    return (
        <div className="container my-5">
            <div className="row justify-content-between">
                <div className="col-6">
                    <h2>Pending Prescriptions</h2>
                </div>
                <div className="col-5">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="number" placeholder="Roll/PF Number" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {pending?.map((element) => {
                        return (
                            <div className="col-md-4" key={element.id}>
                                <Patient prescription={element}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default InitialPharmacy;
