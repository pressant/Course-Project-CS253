import React, { useState } from 'react';
import Popup from './Popup';
import { useEffect } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

const MedHistory = (props) => {

    const axiosPrivate = useAxiosPrivate();
    const [showModal, setShowModal] = useState(false);
    const [popup, setPopup] = useState(false);
    const{ rollno } = props;
    const [hist,setHist]=useState([]);

    useEffect(() => {
        getHistory();
    },[]);

    const getHistory = () => {
        axiosPrivate.get("/student_history"+rollno).then((res) => {
            console.log(res.data.request);
            setHist(res.data.request);

        }).catch((err) => {
            console.log(err);
        })
    }
    
    return (
        <div className="col-7 mx-1" style={{ maxHeight: '600px', overflowY: 'scroll' }}>
            {hist?.map((element) => (
                <div key={element.index}>
                    <div className="card my-3 mx-3 btn btn-light" key={element.index} onClick={() => {
                        setPopup(element);
                        setShowModal(true);
                    }}>
                        <div className="card-header text-center">{Date(element.date)}</div>
                        <div className="card-body">
                            <h5 className="card-title">{element.symptoms}</h5>
                        </div>
                        <Popup open={showModal} details={popup}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MedHistory;