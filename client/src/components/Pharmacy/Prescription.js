import "./Prescriptions.css"
import React from "react";
import { useLocation } from "react-router-dom";

const Prescription = () => {
    const { state } = useLocation();
    let idx = 0;

    const handleClick = () => {
        
    };

    const handlePrint = () => {
        window.print();
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                <div className="col-6">
                    <h1>Dispense Medicines</h1>
                </div>
            </div>
            <div className="text-center mt-5">
                <div className="row">
                    <div className="col">Name: {state.name}</div>
                    <div className="col">Doctor: {state.doctor}</div>
                    <div className="col">Roll/PF Number: {state.id}</div>
                </div>
            </div>
            <table className="table table-bordered mt-5">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Medicine ID</th>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Dosage</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {state.medicines?.map((element) => {
                        idx++;
                        return (
                            <tr>
                                <th scope="row">{idx}</th>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.dose}</td>
                                <td style={{ justifyContent: "center", display: "flex" }}>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    </div>
                                </td>
                            </tr>
                        );
                    })} */}
                </tbody>
            </table>
            <button type="button" className="btn btn-dark btn-lg mt-5" onClick={handleClick}>
                Dispense
            </button>
            <div className="container text-center">
                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={handlePrint}>
                    Print Receipt
                </button>

            </div>
        </div>
    );
};

export default Prescription;
