import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Patient from "./Patient";
import { global } from "../login/login";

const InitialPharmacy = (props) => {
    // eslint-disable-next-line
    const history=useHistory();
    const [pending, setPending] = useState(props.prescriptions);
    // pending is an array which stores all pending prescriptions
    // Use setPending to change pending
    var k=0;
   if(global[1]==='pharmacy'){
    k=1;
   }
   if(k===0){
    history.push("/login")
   }
    return (
        <>
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
        </>
    );
};

export default InitialPharmacy;
