import React from 'react'

const UploadReports = () => {
    return (
        <div className="container">
            <h1 className="text-center my-5">Upload Medical Reports</h1>
            <form class="row justify-content-center text-center">
                <div class="col-4">
                    <input type="number" class="form-control" id="inputPassword2" placeholder="Enter Roll/PF Number"/>
                </div>
                <div class="col-3">
                    <button type="submit" class="btn btn-primary mb-3">ENTER</button>
                </div>
            </form>
            <div className="container my-5">
                <div class="row justify-content-between my-3 align-items-center">
                    <div class="col-4">
                        Name:
                    </div>
                    <div class="col-8">
                        <input class="form-control" type="file" id="formFileMultiple" multiple/>
                    </div>
                </div>
                <div class="row justify-content-between my-3 align-items-center">
                    <div class="col-4">
                        Roll/PF Number: 
                    </div>
                    <div class="col-8 text-center">
                        <button type="submit" class="btn btn-primary mb-3">Upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadReports
