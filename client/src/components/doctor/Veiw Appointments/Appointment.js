import React from "react";
import { useHistory } from "react-router-dom";

const Appointment = (props) => {
    const history = useHistory();
    let prescription = props.prescription;

    const handleClick = () => {
        history.push({
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
        <div className="card my-3 hc_card">
            <div className="card-header hc_card_header">{prescription.id}</div>
            <div className="card-body hc_card_body">
                <h5 className="card-title hc_card_title">{prescription.name}</h5>
                <p className="card-text hc_card_text">{prescription.description}</p>
                <button className="btn btn-dark btn-sm hc_card_button" onClick={handleClick}>
                    Conduct Appointment
                </button>
            </div>
        </div>
    );
};

export default Appointment;