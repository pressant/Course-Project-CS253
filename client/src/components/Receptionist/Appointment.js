import React from "react";
import { useHistory } from "react-router-dom";

const Appointment = (props) => {
    const history = useHistory();
    let prescription = props.prescription;

    const handleClick = () => {
        history.push({
            pathname: "/receptionist/doctorallotment",
            state: {
                name: prescription.name,
                id: prescription.id,
                description: prescription.description,
                preferredDoctor: prescription.preferredDoctor,
                slot: prescription.slot,
            }
        });
    };

    return (
        <div className="my-3">
            <div className="card my-3">
                <div className="card-header">{prescription.id}</div>
                <div className="card-body">
                    <h5 className="card-title">{prescription.name}</h5>
                    <p className="card-text">{prescription.description}</p>
                    <button className="btn btn-dark btn-sm" onClick={handleClick}>
                        Allot Doctor
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;