import React from 'react'
// import logo from './logo.png'
import logo from './logo_bg.png'

const Navbar = () => {
    return (
        <nav class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                <img src={logo} alt="E-Vaidya" width="30" height="24" class="d-inline-block align-text-top"/>
                <i class="fa-solid fa-user"></i>
                E-Vaidya
                </a>
            </div>
        </nav>
    );
}

export default Navbar