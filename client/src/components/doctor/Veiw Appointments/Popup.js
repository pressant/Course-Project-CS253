import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const CenteredBox = styled(Box)({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Popup = (props) => {
    const [open, setOpen] = useState(props.open);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className="btn btn-dark" onClick={handleOpen}>
                View Details
            </button>
            <Modal open={open} onClose={handleClose} aria-labelledby="popup-title" aria-describedby="popup-description" >
                <CenteredBox>
                    <div className="card text-bg-light mb-3" style={{maxWidth: "18rem"}}>
                        <div className="card-header d-flex row">
                            <div class="text-center col-9">{props.details.date}</div>
                            <div class="text-center col-3">
                                <button type="button" className="btn-close text-end" aria-label="Close" onClick={handleClose}></button>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Light card title</h5>
                            <p className="card-text">{props.details.description}</p>
                        </div>
                    </div>
                </CenteredBox>
            </Modal>
        </div>
    );
}

export default Popup;