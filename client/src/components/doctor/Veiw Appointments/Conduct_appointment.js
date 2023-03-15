import React,{useState} from 'react'




const Conduct_appointment = () => {
    const [value,setValue]=useState("");
    const [remarks,setRemarks]=useState("");
    const [days,updateDays]=useState(1);
    const options = [
        {value: 'value-1', text: '3-carboxy-4-hydroxyaniline'},
        {value: 'value-2', text: '5-ASA'},
        {value: 'value-3', text: '5-aminosalicylic acid'},
        {value:"value-4",text:'Asacolitin'}
    ];
    const handleChange=()=>{
        console.log("Onchange");
    }
    const increment=()=>{
        updateDays(days+1);
    }
    const changed=(e)=>{
        setRemarks(e.target.value);
    }

    // const medicines = ["3-carboxy-4-hydroxyaniline",
    // "5-ASA",
    // "5-aminosalicylic acid",
    // "Asacol",
    // "Asacolitin",
    // "Canasa",
    // "Claversal",
    // "Fisalamine",
    // "Iialda",
    // "Lixacol",
    // "Mesalamine",
    // "Mesalazina",
    // "Mesalazine",
    // "Mesalazinum",
    // "Mesasal",
    // "P-Aminosalicylsaeure",
    // "Pentasa",
    // "Rowasa",
    // "Salofalk",
    // "m-Aminosalicylic acid"];

  return (
    <>
       
         <div>
            Medicine
         </div>
              

         <div id="medicine">
         <select value={value} onChange={handleChange}>
  {options.map(item => {
      return (<option key={item.value} value={item.value}>{item.text}</option>);
  })}
</select>     
            </div>

       
         <br/>
     <div>
				<input type="radio" id="1BB" name="dose" value="1BB" />
				<label for="morning">1BB</label>
				<input type="radio" id="1AB" name="dose" value="1AB" />
				<label for="evening">1AB</label>
                <input type="radio" id="1BL" name="dose" value="1BL" />
				<label for="evening">1BL</label>
                <input type="radio" id="1AL" name="dose" value="1AL" />
				<label for="evening">1AL</label>
                <input type="radio" id="1BD" name="dose" value="1BD" />
				<label for="evening">1BD</label>
                <input type="radio" id="1AD" name="dose" value="1AD" />
				<label for="evening">1AD</label>
			</div>

            <br/>
            
            <h7>Days  {days}</h7>
            <button onClick={increment}>+</button>
            
            <input value={remarks} id="remarks" placeholder='remarks' onChange={changed}/>
            <p>Prescription to be implemented mostly by backend</p>

            <br/>

<button>Specialist Refferal</button> 
<button>Diagnostic Test</button> 
<button>Medical history</button> 

    <br/>

    <button>Submit</button>

    </>




  )
}

export default Conduct_appointment
