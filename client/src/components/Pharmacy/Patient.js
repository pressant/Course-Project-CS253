import React from 'react'

const Patient = (props) => {
  return (
    <div className="my-3">
        <div className="card my-3">
          <div className="card-header">{props.id}</div>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary btn-sm">View Prescription</a>
          </div>
        </div>
    </div>
  )
}

export default Patient
