import React,{useState} from 'react'
import axios from 'axios'
import {useHistory } from 'react-router-dom'

const Conduct_appointment = (props) => {

    const history = useHistory();
    const [medicine, setMedicine] = useState([]);
    const [val, setVal] = useState("");
    const { doctor, slot, rollno } = props;

    const handleMinus = () => {
        var input = document.getElementById('days');
        if(input.value > 0) input.value = parseInt(input.value) - 1;
    }

    const handlePlus = () => {
        var input = document.getElementById('days');
        input.value = parseInt(input.value) + 1;
    }

    const changed = (e) => [
        setVal(e.target.value)
    ]

    const handlePrescribe = () => {
        axios.post('http://localhost:9002/doctor_prescribe', {
            rollno: rollno,
            medication: medicine,
            remark: val,
            Doctor: doctor,
            appt_slot: slot,
        }).then((res) => {
            console.log(res);
            history.push('/doctor/view_appointment');
        }).catch((err) => {
            console.log(err);
        })
    }
    
    const handleClick = () => {
        var name = document.getElementById('name').value;
        var dosage = document.getElementsByName('btnradio');
        var dose;
        var days = document.getElementById('days').value;
        for(var i = 0; i < dosage.length; i++)
        {
            if(dosage[i].checked)
            {
                dose = dosage[i].value;
                dosage[i].checked = false;
                break;
            }
        }
        setMedicine([...medicine, {name_of_medicine: name, dosage: dose, days: days}]);
        document.getElementById('name').value = "";
        document.getElementById('days').value = 0;
    }

    return (
        <div className="col-7 text-center">
            <h2 className="mb-5">Medication</h2>
            <div className="container my-3">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Medicine Name</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="name"/>
                </div>
            </div>
            <div className="btn-group my-3" role="group" aria-label="Basic radio toggle button group">  
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" value="qD"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1">qD</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" value="BID"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2">BID</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" value="TID"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio3">TID</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" value="BBF"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio4">BBF</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" value="BD"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio5">BD</label>
            </div>

            <div className="row my-3">
                <div className="col-5 align-center">
                    Days:
                </div>
                <div className="col-5">
                    <div className="input-group mb-3">
                        <button onClick={handleMinus} className="btn btn-dark" type="button" id="button-addon2">-</button>
                        <input id="days" style={{textAlign: "center"}} type="number" className="form-control" placeholder="0" aria-label="Number of Days" aria-describedby="button-addon2" value={0} readOnly/>
                        <button onClick={handlePlus} className="btn btn-dark" type="button" id="button-addon2">+</button>
                    </div>
                </div>
            </div>

            <button className="btn btn-dark my-3" onClick={handleClick}>Add Medicine</button>
            <div className="row my-3">
                <div className="col-6">
                    <h4>Current Prescription</h4>
                </div>
                <div className="col-6">
                    <h4 className="justify-content-center">Remarks</h4>
                </div>
                <div className="col-6">
                    {
                        medicine?.map((element) => {
                            return(
                                <div className="row mx-3">
                                    {element.name_of_medicine} {element.dosage}-{element.days}
                                </div>
                            );
                        })
                    }
                </div>
                <div className="col-6">
                    <div className="input-group">
                        <textarea value={val} onChange={changed}  className="form-control" rows="6" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <button className="btn btn-lg btn-dark" onClick={handlePrescribe}>
                    Prescribe
                </button>
            </div>
        </div>
    );
}

export default Conduct_appointment;
