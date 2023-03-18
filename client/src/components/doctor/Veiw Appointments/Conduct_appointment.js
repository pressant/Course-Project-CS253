import React,{useState} from 'react'

const Conduct_appointment = () => {

    // const [value,setValue]=useState("");
    // const [remarks,setRemarks]=useState("");
    // const [days,updateDays]=useState(1);
    // const options = [
    //     {value: 'value-1', text: '3-carboxy-4-hydroxyaniline'},
    //     {value: 'value-2', text: '5-ASA'},
    //     {value: 'value-3', text: '5-aminosalicylic acid'},
    //     {value:"value-4",text:'Asacolitin'}
    // ];
    // const handleChange=()=>{
    //     console.log("Onchange");
    // }
    // const increment=()=>{
    //     updateDays(days+1);
    // }
    // const changed=(e)=>{
    //     setRemarks(e.target.value);
    // }

    function doOn(obj)
     {

        if(obj.id=="mydef")
        {
            document.getElementById("def1").style.display="none";
            document.getElementById("def").style.display="block";
        }
        if(obj.id=="search")
        {
            document.getElementById("def").style.display="none";

            document.getElementById("def1").innerHTML=`<li><a id="Java" onclick="mydef(this);" >java</a></li><li><a id="oracle" onclick="mydef(this);" >Oracle</a></li>`;

            document.getElementById("def1").style.display="block";
        }

    }
    function mydef(obj)
    {
        document.getElementById("search").value=obj.innerHTML;
        document.getElementById("def1").style.display="none";
        document.getElementById("def").style.display="none";
    }

    return (
        <div className="container row">
            <div className="col-5" role="group" aria-label="Vertical button group">
                <button type="button" className="btn btn-dark col-12 my-5">Prescribe Medication</button>
                <button type="button" className="btn btn-dark col-12 my-5">Medical History</button>
                <button type="button" className="btn btn-dark col-12 my-5">Specialist Referral</button>
                <button type="button" className="btn btn-dark col-12 my-5">Diagnostic Tests</button>
            </div>
            <div className="col-7 text-center">
                <h2 className="mb-5">Medication</h2>
                <div className="container">
                    <div className="form-group">
                        <label className="col-xs-3 control-label">Medicine: </label>
                        <div className="col-xs-7">
                            <div className="dropdown">
                                <button id="mydef" className="btn dropdown-toggle" type="button" data-toggle="dropdown" onclick={doOn}>
                                    <div className="col-xs-10">
                                        <input type="text" id="search" placeholder="search" onkeyup={doOn}></input>
                                    </div>
                                    <span className="glyphicon glyphicon-search"></span>
                                </button>
                                <ul id="def" className="dropdown-menu" style={{display:"none"}}>
                                    <li><a id="HTML" onclick={mydef} >HTML</a></li>
                                    <li><a id="CSS" onclick={mydef}>CSS</a></li>
                                    <li><a id="JavaScript" onclick={mydef} >JavaScript</a></li>
                                </ul>
                                <ul id="def1" className="dropdown-menu" style={{display:"none"}}></ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                    <label class="btn btn-outline-primary" htmlFor="btnradio1">qD</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                    <label class="btn btn-outline-primary" htmlFor="btnradio2">BID</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                    <label class="btn btn-outline-primary" htmlFor="btnradio3">TID</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
                    <label class="btn btn-outline-primary" htmlFor="btnradio4">BBF</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off"/>
                    <label class="btn btn-outline-primary" htmlFor="btnradio5">BD</label>
                </div>
            </div>
        </div>
    );
}
export default Conduct_appointment;
