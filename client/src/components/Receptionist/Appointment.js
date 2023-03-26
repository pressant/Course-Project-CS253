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
            <div className="card my-3 hc_card">
                <div className="card-header hc_card_header">{prescription.id}</div>
                <div className="card-body hc_card_body">
                    <h5 className="card-title hc_card_title">{prescription.name}</h5>
                    <p className="card-text hc_card_text"><span className="appointment_description">{prescription.description}</span></p>
                    <button className="btn btn-dark btn-sm hc_card_button" onClick={handleClick}>
                        Allot Doctor
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;