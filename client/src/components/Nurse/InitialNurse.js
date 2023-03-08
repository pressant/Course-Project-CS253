import React from 'react'

const InitialNurse = () => {
  return (
    <div className="container text-center my-5">
      <h1>Add Vital Information</h1>
      <div class="input-group input-group-lg my-5">
        <span class="input-group-text" id="inputGroup-sizing-lg">Roll/PF Number</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button">Enter</button>
      </div>
    </div>
  )
}

export default InitialNurse
