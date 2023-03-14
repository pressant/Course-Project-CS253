import React from "react"
import "./homepage.css"
import { useHistory } from "react-router-dom";
const Homepage = ({setLoginUser}) => {
    const history=useHistory();
    return (
        <>
        <div className="homepage">
            <h1>Hello Homepage</h1> 
            if(1===1){
                history.push('/nurse')
            }
        </div>
        </>
    )
}

export default Homepage