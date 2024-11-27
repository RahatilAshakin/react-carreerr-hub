import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    // State to track if background image is visible
    const [bgVisible, setBgVisible] = useState(true);

    const location = useLocation();  // Get the current route path

    // Function to handle click event
    const handleClick = () => {
        setBgVisible(!bgVisible);  // Toggle the background visibility
    };

    useEffect(() => {
        // Show background for all links except "Career Hub" and "Home"
        if (location.pathname === '/' || location.pathname === '/CareerHub') {
            setBgVisible(false); // Hide background on Home and Career Hub
        } else {
            setBgVisible(true);  // Show background for other routes
        }
    }, [location]); // Run effect whenever the location changes

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Jobs">Jobs</NavLink></li>
            <li><NavLink to="/Applied">Applied</NavLink></li>
            {/* <li><NavLink to="/Statictis">Statictis</NavLink></li> */}
            {/* <li><NavLink to="/Blogs">Blogs</NavLink></li> */}
        </>
    );

    return (
        <div>
            {/* Navbar with conditional background image */}
            <div 
                className={`navbar bg-no-repeat bg-right-top h-auto ${bgVisible ? 'bg-[url("/assets/images/bg2.png")]' : ''}`}  // Apply bg only if bgVisible is true
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/">
                        <button onClick={handleClick} className="btn btn-ghost text-xl">Career Hub</button>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <Link to={'/Jobs'}><a className="btn btn-primary">Start Applying</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
