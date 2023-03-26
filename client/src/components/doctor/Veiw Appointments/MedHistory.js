import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MedHistory = (props) => {
    
    const [showModal, setShowModal] = useState(false);
    // eslint-disable-next-line
    const{ rollno } = props;

    const hist = [
        {
            index: 1,
            date: '1-1-2003',
            description: 'asdg sdass df f',
        }, 
        {
            index: 2,
            date: '1-1-2004',
            description: 'dafxger gerdf',
        },
        {
            index: 3,
            date: '1-1-2005',
            description: 'asdg sdf asdf',
        },
        {
            index: 4,
            date: '1-1-2005',
            description: 'asdg sdf asdf',
        },
        {
            index: 5,
            date: '1-1-2005',
            description: 'asdg sdf asdf',
        },
        {
            index: 6,
            date: '1-1-2005',
            description: 'asdg sdf asdf',
        },
        {
            index: 7,
            date: '1-1-2005',
            description: 'asdg sdf asdf',
        },
        {
            index: 8,
            date: '1-1-2005',
            description: 'asdg sdf asdf',
        },
        {
            index: 9,
            date: '1-1-2005',
            description: 'asdg sdf asdf',
        },
        {
            index: 10,
            date: '1-1-2005',
            description: 'asdg sdf asdf',
        },
        {
            index: 11,
            date: '1-1-2005',
            description: 'asdg sdf asdf',
        },
    ]

    const handleClose = () => setShowModal(false);
    const handleClick = () => setShowModal(true);
    
    return (
        <div className="col-7 mx-1" style={{ maxHeight: '600px', overflowY: 'scroll' }}>
            {hist?.map((element) => (
                <>
                    <div className="card my-3 mx-3 btn btn-light" onClick={handleClick}>
                        <div className="card-header text-center">{element.date}</div>
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <p className="card-text">{element.description}</p>
                        </div>
                    </div>
                    <Modal show={showModal} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Pop-up Window Title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{element.description}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ))}
        </div>
    );
}

export default MedHistory;