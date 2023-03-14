import React from 'react'
import { useHistory } from 'react-router-dom'
import './nurse.css'

const InitialNurse = (props) => {

    const history = useHistory();

    const handleClick = () => {
        history.push({
            pathname: '/nurse/vitals',
            state: {
                name: props.name,
                id: props.id
            },
        });
    }

    return (
        <div className="container text-center my-5">
            <h1>Add Vital Information</h1>
            <div className="input-group input-group-lg my-5">
                <span className="input-group-text" id="inputGroup-sizing-lg">Roll/PF Number</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button onClick={handleClick} className="btn btn-primary" type="button">Enter</button>
                {/* <button onClick={() => {history.push({pathname: '/nurse/vitals', state: {name: props.name, id: props.id}});}} className="btn btn-primary" type="button">Enter</button> */}
            </div>
        </div>
    );
}

export default InitialNurse
