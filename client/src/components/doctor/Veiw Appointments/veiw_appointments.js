import "./view_appointments.css"
import React from 'react'
import Card from "react-bootstrap/Card"
import { Link } from 'react-router-dom'

const veiw_appointments = () => {

  return (
    <div className="view_appointments">
      <Card className="appointment_card shadow">
        <Card.Body>
          <Card.Title>Student Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Student Roll_no</Card.Subtitle>
          <Card.Text>
            Description
          </Card.Text>
          <button>Medical History</button>
          <br/>
          <Link to="./conduct_appointment"><button>Begin Appointment</button></Link>
        </Card.Body>
      </Card>

      <Card className="appointment_card shadow">
        <Card.Body>
          <Card.Title>Student Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Student Roll_no</Card.Subtitle>
          <Card.Text>
            Description
          </Card.Text>
          <button>Medical History</button>
          <br/>
          <Link to="./conduct_appointment"><button>Begin Appointment</button></Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default veiw_appointments
