import "./Navbar.css"
import React from 'react'
// import logo from './logo.png'
import logo from './logo_bg.png'
// import { Icons } from './Icons';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top Navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="E-Vaidya" className="d-inline-block"/>
                {/* <i className="fa-solid fa-user"/> */}
                E-Vaidya
                </a>
                {/* <Icons/> */}
            </div>
        </nav>
    );
}

export default Navbar