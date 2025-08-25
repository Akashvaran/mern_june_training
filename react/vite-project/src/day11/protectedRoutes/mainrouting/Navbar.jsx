import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <div className="logo">MyApp</div>


                    <div className="nav-links">
                        <Link to={'/home'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/service'}>Services</Link>
                        <Link to={'/contact'}>Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
