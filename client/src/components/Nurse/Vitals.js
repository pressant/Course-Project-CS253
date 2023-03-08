import React from 'react'

const Vitals = (props) => {
  return (
    <div className="container">
        <div class="row justify-content-between my-3">
            <div class="col-4">Name: {props.name}</div>
            <div class="col-4">Roll/PF Number: {props.id}</div>
        </div>
        <div class="input-group input-group-lg my-5">
            <span class="input-group-text" id="inputGroup-sizing-lg">Oxygen</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <div class="input-group input-group-lg my-5">
            <span class="input-group-text" id="inputGroup-sizing-lg">Temperature</span>
            <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <div class="input-group input-group-lg my-5">
            <span class="input-group-text" id="inputGroup-sizing-lg">Blood Pressure</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button">Submit</button>
        </div>
    </div>
  )
}

export default Vitals
