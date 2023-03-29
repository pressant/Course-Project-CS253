import "./Navbar.css"
import React from 'react'
import logo from './logo_bg.png'

const Navbar = () => {

    const handleLogout = () => {

    }

    return (
        <nav class="navbar navbar-expand fixed-top Navbar">
            <div class="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="E-Vaidya" className="d-inline-block"/>
                     E-Vaidya
                 </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                    </li>
                </ul>
                <form class="d-flex mx-5" role="search">
                    <button class="btn btn-dark" type="submit">Logout</button>
                </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar