import React from 'react'
import Card from "react-bootstrap/Card"
const veiw_appointments = () => {


   const clicked=()=>{
    
   }

  return (


    <div>
      <Card style={{ width: '18rem' , backgroundColor:'cyan',marginBottom:"2rem"}} onClick={clicked}>
      <Card.Body>
        <Card.Title>Student Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Student Roll_no</Card.Subtitle>
        <Card.Text>
          Description
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , backgroundColor:'cyan',marginBottom:"2rem"}}>
      <Card.Body>
        <Card.Title>Student Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Student Roll_no</Card.Subtitle>
        <Card.Text>
          Description
        </Card.Text>
        <Card.Link href="#">Medical History</Card.Link>
        <br/>
        <Card.Link href="#">Start Viewing</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , backgroundColor:'cyan',marginBottom:"2rem"}}>
      <Card.Body>
        <Card.Title>Student Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Student Roll_no</Card.Subtitle>
        <Card.Text>
          Description
        </Card.Text>
        <Card.Link href="#">Medical History</Card.Link>
        <br/>
        <Card.Link href="#">Start Viewing</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginRight:'2rem',marginBottom:"2rem", backgroundColor:'cyan'}}>
      <Card.Body>
        <Card.Title>Student Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Student Roll_no</Card.Subtitle>
        <Card.Text>
          Description
        </Card.Text>
        <Card.Link href="#">Medical History</Card.Link>
        <br/>
        <Card.Link href="#">Start Viewing</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , backgroundColor:'cyan' ,marginBottom:"2rem"}}>
      <Card.Body>
        <Card.Title>Student Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Student Roll_no</Card.Subtitle>
        <Card.Text>
          Description
        </Card.Text>
        <Card.Link href="#">Medical History</Card.Link>
        <br/>
        <Card.Link href="#">Start Viewing</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default veiw_appointments
