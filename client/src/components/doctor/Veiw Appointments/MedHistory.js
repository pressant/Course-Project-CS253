import React, { useState } from 'react';
import Popup from './Popup';

const MedHistory = (props) => {
    
    const [showModal, setShowModal] = useState(false);
    const [popup, setPopup] = useState(false);
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
            description: 'tdhf bdf',
        },
        {
            index: 4,
            date: '1-1-2006',
            description: 'fx cberdfg',
        },
        {
            index: 5,
            date: '1-1-2007',
            description: 'zdxg vdfgbdf',
        },
        {
            index: 6,
            date: '1-1-2008',
            description: 'd fgdzfgdg g',
        },
        {
            index: 7,
            date: '1-1-2009',
            description: 'dfg zdgvfcv',
        },
        {
            index: 8,
            date: '1-1-2010',
            description: 'dfxg fbfdxfsdx',
        },
        {
            index: 9,
            date: '1-1-2011',
            description: 'dg f dgsd sdfdfvxc',
        },
        {
            index: 10,
            date: '1-1-2012',
            description: 'fhtfgh fgfg',
        }
    ]
    
    return (
        <div className="col-7 mx-1" style={{ maxHeight: '600px', overflowY: 'scroll' }}>
            {hist?.map((element) => (
                <div key={element.index}>
                    <div className="card my-3 mx-3 btn btn-light" key={element.index} onClick={() => {
                        setPopup(element);
                        setShowModal(true);
                    }}>
                        <div className="card-header text-center">{element.date}</div>
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <p className="card-text">{element.description}</p>
                        </div>
                        <Popup open={showModal} details={popup}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MedHistory;