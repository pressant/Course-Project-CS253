import React from "react"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import { Route, Routes,BrowserRouter } from "react-router-dom"
import Login from "./components/Login"
const App=()=>{


    return(
        
            <BrowserRouter>
    
                <Routes>
                    <Route path="/" element={<Navbar/>}/>
                    <Route  path="/signup"  element={<Signup/>}/>
                    <Route  path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        
    )
}






export default App