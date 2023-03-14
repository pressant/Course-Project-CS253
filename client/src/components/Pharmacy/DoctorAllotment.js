import React from 'react'
import { useLocation } from 'react-router-dom'

const DoctorAllotment = () => {

    const location = useLocation();
    const state = location.state;

    return (
        <div className="container">
            <div class="row justify-content-between">
                <div class="col-4">Name: {state.name}</div>
                <div class="col-4">Roll/PF Number: {state.id}</div>
            </div>
            <div className="text-center my-5">
                <h2>Description</h2>
            </div>
            <span class="d-block p-2 bg-dark text-white text-center">{state.description}</span>
            <div class="row justify-content-between my-5">
                <div class="col-4">Preferred Doctor: {state.name}</div>
                <div class="col-4">Preferred Slot: {state.id}</div>
            </div>
        </div>
    );
}

export default DoctorAllotment
