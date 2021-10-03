import React from 'react';
import { Container, Nav, NavLink } from 'react-bootstrap';
import './NavBar.css';

const Navbar = () => {
    return (
        <div className="header">
            <nav>
                <NavLink to="/shop">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/teachers">Teachers</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;