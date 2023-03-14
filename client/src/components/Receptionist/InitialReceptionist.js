import React from 'react'

const InitialReceptionist = () => {
  return (
    <div>
        <div className="row">
            <button type="button" class="btn btn-secondary btn-lg col-lg-4 my-3 mx-3">View Appointment Requests</button>
            <button type="button" class="btn btn-secondary btn-lg col-lg-4 my-3 mx-3">View Appointment Status</button>
        </div>
        <div className="row">
            <button type="button" class="btn btn-secondary btn-lg col-lg-4 my-3 mx-3">Upload Medical Reports</button>
            <button type="button" class="btn btn-secondary btn-lg col-lg-4 my-3 mx-3">Set Doctors Schedule</button>
        </div>
    </div>
  )
}

export default InitialReceptionist
