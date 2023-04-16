import React,{useState} from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const UploadReports = () => {

    const axiosPrivate = useAxiosPrivate();
    const [pdfs, setPdfs] = useState([]);
    const [files, setFiles] = useState([]);

    const changeInput = (event) => {
        let f = event.target.files;
        setFiles([...files, f]);
        console.log(f);
    } 

    const handleUpload = () => {
        const name = document.getElementById("inputGroupFile02").value.split("\\").pop();;
        if(name !== '') setPdfs([...pdfs, name]);
        document.getElementById("inputGroupFile02").value = ''
    }

    const handleSubmit = async() => {
        let uploadedFiles = files;
        let formData = new FormData();
        formData.append("file", uploadedFiles);
        formData.append("name", "Name");
        // const res = await fetch('http://localhost:9002/report_upload', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     }
        // })
        axiosPrivate({
            method: "POST",
            url: "/report_upload",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            
        }).catch((err) => {
            console.log(err.message);
        });
    }

    const handleSub = () => {
        var formData = new FormData();
        
    }

    return (
        <div className="container">
            <h1 className="text-center my-5">Upload Medical Reports</h1>
            <form className="row justify-content-center">
                <div className="col-5 my-2">
                    <input type="number" className="form-control" id="inputRollNo" placeholder="Enter Roll/PF Number"/>
                </div>
            </form>
            <form onSubmit={handleSub}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-8">
                        <div className="input-group my-5">
                            <input type="file" className="form-control" id="inputGroupFile02" multiple onChange={(e) => changeInput(e)}/>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <label className="btn btn-dark" onClick={handleUpload}>Upload</label>
                    </div>
                </div>
                <div className="container mt-2 mb-5">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Report Name</th>
                                <th scope="col">Report Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pdfs?.map((item) => {
                                    return(
                                        <tr>
                                            <th scope="row">{pdfs.indexOf(item) + 1}</th>
                                            <td>{item}</td>
                                            <td>
                                                <input type="date" id="start" name="trip-start" min="1900-01-01" max="2040-12-31" required/>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    <div className="text-center my-5">
                        <button className="btn btn-lg btn-dark" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UploadReports
