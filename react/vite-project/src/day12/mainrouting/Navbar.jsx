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
                        
                        <Link to={'/home'}>home</Link>
                        <Link to={'/about'}>About</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
