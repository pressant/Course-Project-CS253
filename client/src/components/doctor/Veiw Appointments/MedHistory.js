import React from 'react';

const MedHistory = (props) => {
    
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
            description: 'asdg sdf asdf',
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
    
    return (
        <div className="col-7 mx-1" style={{ maxHeight: '600px', overflowY: 'scroll' }}>
            {hist?.map((element) => (
                // <div className=" card my-5" key={element.index}>
                //     <h4>{element.date}</h4>
                //     <p className="text-start">{element.description}</p>
                //     {/* <p className="text-start"> Medication:
                //     {element.medication?.map((med) => (
                //         <div className="mx-5" key={med.id}>
                //             {med.name_of_medicine} {med.dosage}-{med.days}
                //         </div>
                //     ))}
                //     </p> */}
                // </div>
                <div className="card my-3 mx-3 btn btn-light">
                    <div className="card-header text-center">{element.date}</div>
                    <div className="card-body">
                        <h5 className="card-title">{element.name}</h5>
                        <p className="card-text">{element.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MedHistory