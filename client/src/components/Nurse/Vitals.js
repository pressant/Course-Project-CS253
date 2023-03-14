import React from 'react'
import { useLocation } from 'react-router-dom';
import './vitals.css'

const Vitals = () => {

    const location = useLocation();
    const state = location.state;

    return (
        <div className="container">
            {/* <div className="row justify-content-between my-3">
                <div className="col-4">Name: {state.name}</div>
                <div className="col-4">Roll/PF Number: {state.id}</div>
            </div>
            <div className="input-group input-group-lg my-5">
                <span className="input-group-text" id="inputGroup-sizing-lg">Oxygen</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
            <div className="input-group input-group-lg my-5">
                <span className="input-group-text" id="inputGroup-sizing-lg">Temperature</span>
                <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
            <div className="input-group input-group-lg my-5">
                <span className="input-group-text" id="inputGroup-sizing-lg">Blood Pressure</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button">Submit</button>
            </div> */}
            <header style={{backgroundColor:"#ff9933", height:"100px"}}>
                {/* <img id='user1' src="user-solid.svg" height="70px" width="70px"/> */}
                <i className="fa-solid fa-user"></i>
            </header>
            <br/>
            <div className="container">
                <div className="card text-center user_pr">
                    <div className="card-body bode">
                        <h1>Name: {state.name}</h1>
                        <br/>
                        <h5 className="card-title">Roll/PF Number: {state.id}</h5>
                    </div>
                </div>
                <br/>
                <form className="vitalinfo">
                    <div className="row ">
                        <div className="form-group entry ">
                            <label style= {{position: "relative"}} htmlFor="o2">Oxygen</label>
                            <input type="text" name="oxy" className="form-control" id="o2" aria-describedby="emailHelp" placeholder="Enter % oxygen" required/>
                        </div>
                        <div className="form-group entry">
                            <label htmlFor="temp">Temperature</label>
                            <input type="text" name="tem" className="form-control" id="temp" placeholder="Enter in Fahrenheit" required/>
                        </div>
                        <div className="form-group entry">
                            <label htmlFor="bp">BP</label>
                            <input type="text" name="bp" className="form-control" id="bp" placeholder="High/Low format" required/>
                        </div>
                    </div>
                    <br/>
                    <button type="submit ml-600" className=" butt">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Vitals
