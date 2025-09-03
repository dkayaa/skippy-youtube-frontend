import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </nav >
    )
}

export default Navbar;