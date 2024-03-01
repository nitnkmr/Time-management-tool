import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
            <div className="logo"><h2> <Link to={"/"}> NK</Link></h2></div>
            <div className="project-name">Time management tool</div>
            <div className="nav-link">
                <ul>
                    <Link to ={"/"}>
                        <li>Home</li>
                    </Link>
                    <Link to={"/archived"}>
                        <li>Archived</li>
                    </Link>
                    <Link to = {"/about"}>
                        <li>About Us</li>
                    </Link>
                </ul>
            </div>

        </header>
    )
}

export default Navbar