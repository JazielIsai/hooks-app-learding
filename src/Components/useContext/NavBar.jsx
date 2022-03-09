import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"> Use Context </NavLink>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" to="/" > Home </NavLink>
                        <NavLink className="nav-link" to="/about" > About </NavLink>
                        <NavLink className="nav-link"to="/login" > Login </NavLink>
                    </div>
                </div>
            </div>
        </nav>
        
    )
};
