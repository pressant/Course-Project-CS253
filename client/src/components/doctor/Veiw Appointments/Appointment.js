import React from "react";
import { useNavigate } from "react-router-dom";

const Appointment = (props) => {
    const navigate = useNavigate();
    let prescription = props.prescription;

    const handleClick = () => {
        navigate({
            pathname: "/doctor/conduct_appointment",
            state: {
                name: prescription.name,
                id: prescription.id,
                description: prescription.description,
                slot: prescription.slot,
                doctor: prescription.doctor
            }
        });
    };

    return (
        <div className="card my-3">
            <div className="card-header">{prescription.id}</div>
            <div className="card-body">
                <h5 className="card-title">{prescription.name}</h5>
                <p className="card-text">{prescription.description}</p>
                <button className="btn btn-dark btn-sm" onClick={handleClick}>
                    Conduct Appointment
                </button>
            </div>
        </div>
    );
};

export default Appointment;