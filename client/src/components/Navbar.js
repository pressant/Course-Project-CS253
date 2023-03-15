import React from 'react'
// import logo from './logo.png'
import logo from './logo_bg.png'
// import { Icons } from './Icons';

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="E-Vaidya" width="30" height="24" className="d-inline-block align-text-top"/>
                {/* <i className="fa-solid fa-user"/> */}
                E-Vaidya
                </a>
                {/* <Icons/> */}
            </div>
        </nav>
    );
}

export default Navbar