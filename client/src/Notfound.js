import React from 'react'
import logo from "./components/logo.png"

const Notfound = () => {
  return (
    <>
      <img src={logo} height={"100vh"}></img>
      <div><h5>404. That’s an error.<br></br>The requested URL was not found on this server. That’s all we know.</h5></div>
    </>
  )
}

export default Notfound