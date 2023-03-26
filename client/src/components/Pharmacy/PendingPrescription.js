import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Prescription from "./Prescription";

const PendingPrescription = () => {
    // eslint-disable-next-line
    // const history=useHistory();
    // pending is an array which stores all pending prescriptions
    // Use setPending to change pending
    //     var k=0;
    //    if(global[1]==='pharmacy'){
        //     k=1;
        //    }
        //    if(k===0){
            //     history.push("/login")
            //    }
            
    const { state } = useLocation();

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
                    {state?.map((element) => {
                        return (
                            <div className="col-md-4" key={element.id}>
                                <Prescription prescription={element}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PendingPrescription;
