import React from "react";
import { useHistory } from "react-router-dom";

const Patient = (props) => {
    const history = useHistory();
    let prescription = props.prescription;

    const handleClick = () => {
        history.push({
            pathname: "/pharmacy/prescription",
            state: {
                name: prescription.name,
                id: prescription.rollno,
                medicines: prescription.medication,
                doctor: prescription.Doctor
            }
        });
    };

    return (
        <div className="my-3">
            <div className="card my-3">
                <div className="card-header">{prescription.rollno}</div>
                <div className="card-body">
                    <h5 className="card-title">{prescription.name}</h5>
                    <button className="btn btn-dark btn-sm" onClick={handleClick}>
                        View Prescription
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Patient;